//Every error class in our codebase will extend this error class so that in our error catching middleware we don't have to do instance of again and again
//Every error that we are going to send back to the client will have this 'CustomError' class which is an abstract class
//We can do the same logic with interfaces
//Write down an interface directly in the error catching middleware and satisfy it using annotation of interface instead
export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super();
    // Only becoz we are extending a built in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  //method signature
  abstract serializeErrors(): { message: string; field?: string }[];
}
