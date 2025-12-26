// errors/appError.js
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode; // e.g. 401, 409
    this.isOperational = true;    // expected error
  }
}