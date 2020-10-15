import {Router} from 'express';

class BaseRoutes{
    public router:Router;

    constructor(){
        this.router = Router();
    }
}

export default BaseRoutes;