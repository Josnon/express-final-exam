import type { NextFunction, Request, Response } from "express";

/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;
  if (!body) {
    return res.status(400).json({ message: "Invalid payload" });
  }

  const { weight, weightUnit, height, heightUnit } = body;
  if (
    typeof weight !== "number" ||
    typeof weightUnit !== "number" ||
    typeof height !== "number" ||
    typeof heightUnit !== "number"
  ) {
    return res.status(400).json({ message: "Invalid payload" });
  }

  next();
}
