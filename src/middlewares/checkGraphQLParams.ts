import type express from 'express';
import type * as GraphQL from '../types/graphql';
import * as lib from '../lib';
import Schema from '../graphql/Schema';

/**
 * Express middleware which check request parameters,
 * compare their with GraphQL Schema and return formatted error.
 * @param req [express.Request]
 * @param res [express.Response]
 * @param next [express.NextFunction]
 * @return [express.Response<any, Record<string, any>> | undefined]
 */
export default function checkGraphQLParams(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): express.Response<any, Record<string, any>> | undefined {
  const { body } = req;
  if (body) {
    const { query, variables } = body;
    let errRes: GraphQL.Response;
    const getErr = (methodName: string, errorResult: GraphQL.Response) => {
      return {
        data: {
          [methodName]: errorResult,
        },
      };
    };
    // Return 'Bad request' if query not send
    if (!query) {
      res.status(400).json({
        status: 'error',
        message: 'Request query is required',
        httpCode: 400,
      });
    }
    // Find params input type
    const paramsBlockReg = /\(\$\w+: \w+!?\)/;
    type MatchResult = Array<string> | null | string;
    let paramsBlock: MatchResult = query.match(paramsBlockReg);
    paramsBlock = paramsBlock ? paramsBlock[0] : null;
    // If request have any parameters
    let methodName: MatchResult;
    if (paramsBlock) {
      // Get method name from query
      methodName = query.match(/ +\w+\(/);
      methodName = methodName ? methodName[0] : null;
      if (!methodName) {
        errRes = {
          status: 'error',
          message: 'Parameters not found in query method',
          httpCode: 400,
        };
        return res.status(400).json(getErr('MissingParametersInQueryMethod', errRes));
      }
      const method: string = methodName.replace(/[ (]+/g, '');
      // Clean params input type
      let inputName: string = paramsBlock;
      inputName = inputName.replace(/\$\w+/, '').replace(/[ ()!:]+/g, '');
      // Watch Schema definitions
      const defs = Schema.definitions;
      for (let i = 0; defs[i]; i++) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const item: any = defs[i];
        const { name } = item;
        if (!name) break;
        const { value } = name;
        if (!value) break;
        // If it is target request
        if (inputName === value) {
          // Watch required fields in Schema definitions
          const { fields } = item;
          if (!fields) break;
          for (let j = 0; fields[j]; j++) {
            const field = fields[j];
            const { type } = field;
            // Check right send variables
            if (type.kind === 'NonNullType' && !variables) {
              errRes = {
                status: 'error',
                message: 'Request variables is required',
                httpCode: 400,
              };
              return res.status(400).json(getErr(method, errRes));
            }
            const fieldVal = field.name?.value;
            const fieldType = type?.type?.name?.value;
            // Watch object of variables
            let isReceived = false;
            let currFt = '';
            for (const p in variables) {
              const varObjs = variables[p];
              // Watch properties of object variables
              for (const v in varObjs) {
                const varObj = varObjs[v];
                // Change special numeric graphql types to Js type number
                const fT =
                  fieldType === 'Int' || fieldType === 'Float' ? 'number' : fieldType.toLowerCase();
                currFt = fT;
                if (fieldVal === v) {
                  isReceived = true;
                  const vT = typeof varObj;
                  // Check required and received types
                  if (vT !== fT) {
                    errRes = {
                      status: lib.ERROR,
                      message: `Type of '${v}' are not valid`,
                      httpCode: 400,
                      wrongParameter: {
                        name: v,
                        required: fT,
                        received: vT,
                      },
                    };
                    return res.status(400).json(getErr(method, errRes));
                  }
                }
              }
            }
            // If required field is missing
            if (!isReceived) {
              errRes = {
                status: lib.ERROR,
                message: `Field '${fieldVal}' is required`,
                httpCode: 400,
                wrongParameter: {
                  name: fieldVal,
                  required: currFt,
                  received: 'void',
                },
              };
              return res.status(400).json(getErr(method, errRes));
            }
          }
        }
      }
    }
  }
  next();
}
