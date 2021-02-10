/**
 *  Console - log in console module,
 *  it is in separate file, to control of logs
 *  in future
 */

/**
 * Colors
 */
const Red = '\x1b[31m';
const Reset = '\x1b[0m';
const Bright = '\x1b[1m';
const Yellow = '\x1b[33m';
const Dim = '\x1b[2m';

/**
 * Interface of Console object
 */
interface Console {
  /**
   * Out information with prefix <INFO>
   * @param message {string}
   */
  info: (message: string) => void;
  /**
   * Out debug information with prefix <WARNING>
   * @param message {string}
   */
  warn: (message: string) => void;
  /**
   * Out error information with prefix <ERROR>
   * @param message {string}
   * @param err {string}
   * @param stdErr {string}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (message: string, err: Error, stdErr: Error, context?: any) => void;
  getDate: () => string;
}

/**
 *  Object of log functions
 */
const Console: Console = {
  getDate: () => {
    const d = new Date();
    const date = `${d.getFullYear()}.${
      d.getMonth() + 1
    }.${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`;
    return date;
  },
  info: (message) => {
    const date = Console.getDate();
    console.info(`[${date}] <INFO> ${Bright}${message}${Reset}`);
  },
  warn: (message) => {
    const date = Console.getDate();
    console.info(`[${date}] <WARNING> ${Yellow}${message}${Reset}`);
  },
  error: (message, err, stdErr, context = {}) => {
    const date = Console.getDate();
    console.error(
      `[${date}] <ERROR> ${Yellow}${message}. `,
      `${Reset}Message: ${Red}${err.message}${Reset}`,
      stdErr.stack,
      `${Dim}Module answer: ${Reset}`,
      err.stack,
      `${Dim}Context: ${Reset}`,
      context
    );
  },
};

export default Console;
