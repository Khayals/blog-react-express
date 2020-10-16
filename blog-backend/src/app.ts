import express ,{Application,Request,Response} from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';

import AuthRoutes from './routers/AuthRoutes';

class App{
    public app:Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        dotenv.config();
    }

    protected plugins():void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true }))
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(cors());
    }

    protected routes():void{
        this.app.use("/api/v1/auth",AuthRoutes);

    }
}

export default App;