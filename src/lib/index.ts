/**
 *  Library of package
 *  Declare constants.
 *  Create short help methods.
 *  Export lib namespace with modules
 */
import jwt from 'jsonwebtoken';
import type * as T from '../types';
import * as lib from '../lib';
/**
 * Method check NODE_ENV environment variable
 * if it is not production that return {true}
 */
export function isDev(): boolean {
  return process.env.NODE_ENV !== 'production';
}

/**
 * Check is valid email
 */
export function checkEmail(email: string): boolean {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Get mirror tail of string
 * @param string {string} - origin string
 * @param countSymbols {number} - count needed symbols
 */
export function mirrorTailString(string: string, countSymbols = 32): string {
  let result = '';
  for (let i = 0; i < countSymbols; i++) {
    const num = string.length - i;
    result += string[num] ? string[num] : '';
  }
  return result;
}

/**
 * Get forematted error
 * @param code {number}
 * @param status {T.Status}
 * @param message {string}
 * @param stdError {string} ['']
 */
export function getError(code: number, status: T.Status, message: string, stdError = ''): T.Errors {
  const error: T.ErrorsItem = {
    code,
    status,
    message,
    stdErrMessage: lib.isDev() ? stdError : 'Standard error is not available in production',
  };
  const errArr: T.ErrorsItem[] = [];
  errArr.push(error);
  const errors: T.Errors = {
    errors: errArr,
  };
  return errors;
}

const { env }: any = process;
const { TOKEN_KEY }: T.Env = env;

/**
 * Parse token string
 * @param token {string}
 */
export function parseToken(token: string): T.HandleResult<T.JWT> {
  let error = null;
  let data: any = null;
  try {
    data = jwt.verify(token, TOKEN_KEY);
  } catch (e) {
    error = e;
  }
  return {
    data,
    error,
  };
}

export { default as Console } from './modules/Console';
export { default as ErrorHandler } from './modules/ErrorHandler';
