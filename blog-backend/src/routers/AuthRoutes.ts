import { Request, Response } from 'express';
import BaseRoutes from "./BaseRoutes";

import AuthUserController from '../controllers/AuthUserControllers';
import AuthMiddleware from '../middlewares/AuthMiddleware';

class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("/registeruser",AuthUserController.register);
        this.router.post("/loginuser",AuthMiddleware.validateLoginUser,AuthUserController.login);
    }
}

export default new AuthRoutes().router;