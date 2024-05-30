export class LogoutError {
  error = new Error();
  message = "token expired";
  constructor(err: Error) {
    this.error = err;
  }
}

export class UnauthorizedError {
  error = new Error();
  message = "platform unauthorized user";
  constructor(err: Error) {
    this.error = err;
  }
}
