import BaseRoutes from "../BaseRoutes";

import AuthUserController from '../../controllers/auth/AuthUserControllers';
import AuthValidate from '../../middlewares/auth/AuthValidate';

class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("/registeruser",AuthValidate.validateRegisterUser,AuthUserController.register);
        this.router.post("/loginuser",AuthValidate.validateLoginUser,AuthUserController.login);
    }
}

export default new AuthRoutes().router;