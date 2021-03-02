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
 * Regex for check email
 */
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Check is valid email
 */
export function checkEmail(email: string): boolean {
  return emailRegex.test(String(email).toLowerCase());
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

export function parseISOString(s: string): Date {
  const b = s.split(/\D+/);
  // @ts-ignore
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}