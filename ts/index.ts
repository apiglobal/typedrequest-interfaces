export interface ITypedRequest {
  method: string;
  request: object;
  response: object;
}

export interface IBroadCastEvent<T> {
  broadcastMessage: string;
  uniqueEventId: string;
  payload: T;
}
