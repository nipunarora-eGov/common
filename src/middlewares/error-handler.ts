import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

//this middleware is responsible for returning errors thruout this service in a specified format
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  //General message
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
