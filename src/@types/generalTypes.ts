export interface BackendResponseType<T> extends Response {
  success: boolean;
  message: string;
  data?: T;
}
