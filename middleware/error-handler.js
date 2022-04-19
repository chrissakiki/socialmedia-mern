import { StatusCodes } from "http-status-codes";

const errorHandleMiddleware = (err, req, res, next) => {
  console.log("middlewareerror", err);
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, //500
    message: err.message || "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST; //400
    defaultError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
  }

  // if unique item is taken
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST; //400
    defaultError.message = `${Object.keys(
      err.keyValue
    )} has already been taken`;
  }

  res.status(defaultError.statusCode).json({ message: defaultError.message });
};

export default errorHandleMiddleware;
