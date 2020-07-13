export interface ITypedRequest {
  /**
   * the method that the request response data is meant for
   */
  method: string;

  /**
   * any needed auth data
   */
  authInfo?: {
    jwt: string;
  };

  /**
   * server data that is added for dealing with the request server side. Will be omitted when sending the response
   */
  serverData?: {
    jwtData: any;
    jwtValid: boolean;
  };

  /**
   * the request data
   */
  request: object;

  /**
   * the response data
   */
  response: object;

  /**
   * any error information that might be encountered while dealing with a request
   */
  error?: { text: string; data: any };

  /**
   * retry information for smartly advising the client to retry at a later point in time
   */
  retry?: {
    waitForMs: number;
    reason: string;
  };

  /**
   * a correlation id that 
   */
  correlation?: {
    id: string;
    phase: 'request' | 'response'
  };
}

export type implementsTR<T, U extends T> = {};

export interface ITypedEvent<T> {
  name: string;
  uniqueEventId: string;
  payload: T;
}
