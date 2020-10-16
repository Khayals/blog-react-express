import {Request,Response} from 'express';
import Authentication from '../utils/Authentication';
import authentication from '../utils/Authentication';
import ResponseHelper from '../utils/ResponseHelper';

const db = require('../db/models');

class AuthUserController {
    register = async (req:Request,res:Response):Promise<Response>=>{
        let {name,username,password}=req.body;
        const passwordHash:string = await authentication.hashing(password);
        
        const registerData = await db.users.create({
            name:name,username:username,password:passwordHash,role_id:2
        });

        return ResponseHelper.successData(200,res,"success register",registerData);       
    }

    login = async (req:Request,res:Response):Promise<Response>=>{
        let{username,password} = req.body;
        let getUser = await db.users.findOne({
            where:{username : username}
        });

        if (!getUser) {
            return ResponseHelper.failMessage(401,res,"username or password incorrect");
        }

        let checkPassword:boolean = await Authentication.checkPassword(password,getUser.password);

        if (checkPassword) {
            let token = Authentication.generateToken(getUser.id,getUser.name,username,password,getUser.role_id);
            await db.users.update({
                token:token
            },{
                where:{id:getUser.id}
            });
            return ResponseHelper.successData(200,res,"success login",getUser);
        }

        return ResponseHelper.failMessage(401,res,"username or password incorrect");

    }

}

export default new AuthUserController();