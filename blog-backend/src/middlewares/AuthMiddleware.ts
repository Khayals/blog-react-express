import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import ResponseHelper from '../utils/ResponseHelper';

export const auth = (req: Request,res:Response,next:NextFunction): any => {
    if (!req.headers.authorization) {
        return ResponseHelper.failMessage(401,res,"not auntheticated");
    }

    let secretKey = process.env.JWT_SECRET_KEY || "secret";
    const token: string = req.headers.authorization.split(" ")[1];

    try {
        const credential: string|object = jwt.verify(token,secretKey);
        if (credential) {
            req.app.locals.credential = credential;
            return next();
        }
        return res.send("token invalid");
    } catch (error) {
        return res.send(error)
    }
}