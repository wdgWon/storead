export class LogoutError {
  error = new Error();
  message = "token expired";
  constructor(err: Error) {
    this.error = err;
  }
}
