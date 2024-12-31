import { Response } from "express";

export const handleError = (
  res: Response,
  err: unknown,
  contextMessage: string
): void => {
  if (err instanceof Error) {
    console.error(contextMessage, err.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  } else {
    console.error("Unexpected error", err);
    res.status(500).json({
      message: "Unexpected error occurred",
    });
  }
};
