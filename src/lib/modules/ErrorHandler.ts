class ErrorHandler {
  constructor(errMess: string, code: number) {
    throw new Error(
      JSON.stringify({
        errMess,
        code,
        status: code === 500 ? 'error' : 'warning',
      })
    );
  }
}

export default ErrorHandler;
