/* eslint-disable @typescript-eslint/no-unused-vars */

export type Env = {
  DATABASE_URL: string;
  CORS_ORIGIN: string;
  TOKEN_KEY: string;
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

export type HandleResult<T> = {
  error: Error | null;
  data: T | null;
};

export type JWT = {
  id: number;
  pass: string;
};

export type Status = 'error' | 'warning';

export type ErrorsItem = {
  code: number;
  status: Result;
  message: string;
  stdErrMessage: string;
};

export type Errors = {
  errors: ErrorsItem[];
};

/*
  if need add secure for other node add new schemas when need close other routes by self
  for example: type SelfSchema = 'user' | 'someOther' | '...';
*/
type SelfSchema = 'user';

/**
 * Role policy
 */
type RBAC = {
  minRole?: number; // Minimal accepted role. It is main rule if it is defined and resolved false then 'roles' will be ignored
  roles?: number[]; // List of custom accepted roles
  selfSchema?: SelfSchema; // Accept for access to self data, if true then other locks are ignored
  nonRenewable?: string[]; // A list that prohibits changing some fields yourself
};
