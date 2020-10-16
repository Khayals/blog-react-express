import {Router} from 'express';

import RouteIC from '../routers/RoutesIC';

abstract class BaseRoutes implements RouteIC{
    public router:Router;
    abstract routes():void;

    constructor(){
        this.router = Router();
        this.routes();
    }
    
}

export default BaseRoutes;