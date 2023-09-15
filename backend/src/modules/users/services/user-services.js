import userModel from "../models/user-schema.js";

export const userService = {
    async addUser(userObject){
        try{
              const docs = await userModel.create(userObject);
              return docs;
        }
        catch(err){
            throw err;
        }
    },
    async getAllUser(){
       try{
         const docs = await userModel.find({}).select('-password');
          return docs;
       }
       catch(err){
          throw err;
       }
    },
    async getOneUser(userObject){
        try{
            const docs = await userModel.findOne(userObject).select('-password');
             return docs;
          }
          catch(err){
             throw err;
          }
    },
}