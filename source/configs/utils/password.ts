import bcrypt from "bcrypt-nodejs";
import { AnyFunction } from "sequelize/types/utils";


export default class PasswordHash{

    public static async cryptPassword(password: string, callback:any) {
        bcrypt.genSalt(10, async function(err, salt) {
            if (err) 
            return callback(err);

            await bcrypt.hash(password, salt,null, (err:Error, hash:string) =>{
            return callback(err, hash);
            });
       });
     };
     
    public static async comparePassword(plainPass:string, hashword: string) {
        return new Promise(function(resolve, reject) {
            bcrypt.compare(plainPass, hashword, function(err, res) {
                if (err) {
                     reject(err);
                } else {
                     resolve(res);
                }
            });
        });
     };
}