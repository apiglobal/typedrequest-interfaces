export interface ITypedRequest {
  method: string;
  request: object;
  response: object;
  error?: { text: string; data: any };
  retry?: {
    waitForMs: number;
    reason: string;
  };
}

export type implementsTR<T, U extends T> = {};

export interface ITypedEvent<T> {
  name: string;
  uniqueEventId: string;
  payload: T;
}
