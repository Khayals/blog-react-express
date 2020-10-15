import express ,{Application,Request,Response} from 'express';

class App{
    public app:Application;

    constructor(){
        this.app = express();
        this.routes();
    }

    routes():void{
        this.app.route("/").get((req:Request,res:Response)=>{
            return res.send("workkk");
        });

    }
}

export default App;