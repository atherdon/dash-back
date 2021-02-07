/* eslint-disable @typescript-eslint/no-unused-vars */

export type Env = {
  DATABASE_URL: string;
  CORS_ORIGIN: string;
};

export type Info = {
  onlyCheck: boolean;
};

export interface Resolver<T, U> {
  (parent: any, params: T, context: any, info: any): Promise<U>;
}

export interface Response<T> {
  result: 'error' | 'warning' | 'success';
  message: string;
  data: T;
}

export type Result = 'error' | 'warning' | 'success';
