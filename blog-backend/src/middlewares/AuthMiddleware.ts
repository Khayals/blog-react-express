import {Request,Response,NextFunction} from 'express';
import { check,validationResult } from 'express-validator';

class AuthMiddleware{

    validateLoginUser = [
        check('username').notEmpty().withMessage("username cant empty"),
        check('password').notEmpty().withMessage("password can't empty"),
        (req:Request,res:Response,next:NextFunction) =>{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).send({ errors:errors.array() });
            }
            return next();
        }
    ];
}

export default new AuthMiddleware();