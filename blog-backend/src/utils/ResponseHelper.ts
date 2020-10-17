import {Response} from 'express';

class ResponseHelper{

    successData = (status:number,res:Response,msg:string,data:any):Response =>{
        return res.status(status).json({
            'status':status,
            'message':msg,
            'data':data
        });
    }

    successMessage = (status:number,res:Response,msg:string):Response =>{
        return res.json({
            'status':status,
            'message':msg,
        });
    }

    failMessage = (status:number,res:Response,msg:string):Response =>{
        return res.json({
            'status':status,
            'message':msg,
        });
    }
}

export default new ResponseHelper();
