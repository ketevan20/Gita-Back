import { BadRequestException, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class RoleMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if(!req.headers["admin"]) throw new BadRequestException()
        next()
    }
}