import * as plugins from './typedrequest-interfaces.plugins';

export interface ITypedRequest {
  method: string;
  request: object;
  response: object;
}