import mongoose,{SchemaTypes} from "mongoose";
import { AppConstant } from "../../../shared/utils/appConstant.js";
const schemaName = AppConstant.SCHEMA.USERS_SCHEMA;
const userSchema = new mongoose.Schema({
    name: { type: SchemaTypes.String, required: true },
    email:{type: SchemaTypes.String,required: true, unique:true},
    password:{type:SchemaTypes.String,required:true,unique:true},
})

const userModel = mongoose.model(schemaName,userSchema);

export default userModel;