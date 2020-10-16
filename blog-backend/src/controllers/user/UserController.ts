import {Request,Response} from 'express';

import ResponseHelper from '../../utils/ResponseHelper';

const db = require("../../db/models");

class UserController{
    getProfile = async (req:Request,res:Response):Promise<Response> => {
        let {id} = req.params;
        const dataUser = await db.users.findAll({
            where:{id:id},
            attributes:['id','name','about','username','photo','role_id']
        });
        return ResponseHelper.successData(200,res,'success get data user',dataUser);
    }
}

export default new UserController();