/* eslint-disable @typescript-eslint/no-unused-vars */

export interface Resolver<T, U> {
  (parent: any, params: T, context: any, info: any): Promise<U>;
}

export interface Response<T> {
  result: 'error' | 'warning' | 'success';
  message: string;
  data: T;
}
