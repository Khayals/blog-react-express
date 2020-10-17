import BaseRoutes from "../BaseRoutes";

import {auth} from "../../middlewares/AuthMiddleware";

import UserController from '../../controllers/user/UserController';

class UserRoutes extends BaseRoutes{
    public routes():void{
        this.router.get("/profile/:id",auth,UserController.getProfile);
    }
}

export default new UserRoutes().router