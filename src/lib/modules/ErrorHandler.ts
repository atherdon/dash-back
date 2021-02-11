class ErrorHandler {
  constructor(errMess: string, code: number, stdMessage?: string) {
    throw new Error(
      JSON.stringify({
        errMess,
        code,
        status: code === 500 ? 'error' : 'warning',
        stdMessage,
      })
    );
  }
}

export default ErrorHandler;
