import { AppConstant } from "../../../shared/utils/appConstant.js";
import {userService} from '../services/user-services.js';
const STATUS_CODE = AppConstant.STATUS_CODE;

export const usersControllers = {
    async addUser(request,response){
        try{
            const docs = await userService.addUser(request.body);
            response
            .status(STATUS_CODE.SUCCESS)
             .json({name:docs.name,email:docs.email,_id:docs._id});
        }
        catch{
            response
            .status(STATUS_CODE.SERVER_ERROR)
            .json({ message:"Error in To add user" });
        }
    },
    async getUser(request,response){
        try{
           const docs = await userService.getAllUser();
           response.status(STATUS_CODE.SUCCESS).json(docs);
        }
        catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message:"Error in find user"});
        }
    },
    async getSingleUser(request,response){
        try{
            const docs = await userService.getOneUser(request.body)
            console.log(docs);
            response.status(STATUS_CODE.SUCCESS).json(docs);
         }
         catch(err){
             response.status(STATUS_CODE.SERVER_ERROR).json({message:"Error in find user"});
         }
    },
}