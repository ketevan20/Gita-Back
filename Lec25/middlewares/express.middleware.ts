import { NextFunction, Request, Response } from "express";

export function expressMidleware(req: Request, res: Response, next: NextFunction) {
    console.log("express midleware")
    next()
}