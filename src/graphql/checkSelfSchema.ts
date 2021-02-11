/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type * as T from '../types';
import type * as GraphQL from '../types/graphql';

type RBACResult = {
  _sS: boolean;
  whereId: number;
};

/**
 * Generic fuction reload types from custom case
 * @param params {any}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reloadingParams = <U>(params: any): U => {
  const param: U = params;
  return param;
};

export default function checkSelfSchema(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any,
  data: T.JWT,
  selfSchema?: T.SelfSchema
): RBACResult {
  // DEFAULT block
  let _sS = false; // if _sS == true that self access is accept
  let whereId = -1; // By what parameter it is possible to determine that the user requests his material

  // Definition of global variables for all cases of shitch
  let typedParams, where;

  /**
   * EDITED block
   * If needed add new only for self node,
   * add custom case for id
   */
  switch (selfSchema) {
    case 'user':
      // To avoid typescript errors to do get types of params
      typedParams = reloadingParams<GraphQL.QueryGetOneUserArgs>(params);
      where = typedParams.where;
      // Set _sS and whereId by nedded selfSchema rules
      _sS = where.id === data.id;
      whereId = where.id;
      break;
  }

  // Regurn standartized result
  return {
    _sS,
    whereId,
  };
}
