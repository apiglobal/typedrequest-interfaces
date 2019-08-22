import * as plugins from './typedrequest-interfaces.plugins';

export let standardExport = 'Hi there! :) This is an exported string';


export interface ITypedRequest {
  method: string;
  request: object;
  response: object;
}