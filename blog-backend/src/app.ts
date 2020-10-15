import express ,{Application,Request,Response} from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import dotenv from 'dotenv';

class App{
    public app:Application;

    constructor(){
        this.app = express();
        this.routes();
        dotenv.config();
    }

    protected plugins():void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true }))
        this.app.use(morgan("dev"));
        this.app.use(compression());
    }

    routes():void{
        this.app.route("/").get((req:Request,res:Response)=>{
            return res.send("workkk");
        });
        // this.app.route("/api/v1/users");
        this.app.route("/api/v1/auth");

    }
}

export default App;