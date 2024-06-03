export type CatchedError = Error | unknown;

export class LogoutError {
  error: CatchedError;
  message = "token expired";
  constructor(err: CatchedError) {
    this.error = err;
  }
}

export class UnauthorizedError {
  error: CatchedError;
  message = "platform unauthorized user";
  constructor(err: CatchedError) {
    this.error = err;
  }
}
