export interface ITypedRequest {
  method: string;
  request: object;
  response: object;
}

export interface IBroadCastEvent<T> {
  name: string;
  uniqueEventId: string;
  payload: T;
}
