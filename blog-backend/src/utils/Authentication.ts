import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication{
    public static hashing = (password:string): Promise<string> => {
        return bcrypt.hash(password,10);
    }

    public static checkPassword = async (inputPassword:string,encryptText:string):Promise<boolean>=>{
        let result = await bcrypt.compare(inputPassword,encryptText);
        return result;
    }

    public static generateToken = (id:number,name:string,username:string,password:string):string =>{
        const secretKey:string = process.env.JWT_SECRET_KEY || "secret";
        const token:string = jwt.sign({id,name,username,password},secretKey);
        return token;
    }
}