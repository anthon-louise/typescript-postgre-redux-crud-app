import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError.js";

export const errorHandler = (
    err: Error,
    _: Request,
    res: Response,
    __: NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({message: err.message})
    }

    console.error(err)
    res.status(500).json({message: "Internal server error"})
}