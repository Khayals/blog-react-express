import BaseRoutes from "./BaseRoutes";

class AuthRoutes extends BaseRoutes{
    public routes():void{
        this.router.post("/register")
    }
}