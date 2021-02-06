/**
 *  Library of package
 *  Declare constants.
 *  Create short help methods.
 *  Export lib namespace with modules
 */
import type * as T from '../types';

/**
 * Constant status name 'error'
 */
export const ERROR: T.Result = 'error';

/**
 * Constant status name 'warning'
 */
export const WARNING: T.Result = 'warning';

/**
 * Constant status name 'success'
 */
export const SUCCESS: T.Result = 'success';

/**
 * Message when receive wrong parameters
 */
export const BAD_REQUEST = 'Bad request';

/**
 * Method check NODE_ENV environment variable
 * if it is not production that return {true}
 */
export function isDev(): boolean {
  return process.env.NODE_ENV !== 'production';
}

export { default as Console } from './modules/Console';
