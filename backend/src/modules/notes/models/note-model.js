import mongoose, {  SchemaTypes } from 'mongoose';
import { AppConstant } from '../../../shared/utils/appConstant.js';
const schemaName = AppConstant.SCHEMA.NOTE_SCHEMA;
const NoteSchema = new mongoose.Schema({
    id:{type:SchemaTypes.String,required:true},
    title:{type:SchemaTypes.String,required:true},
    desc:{type:SchemaTypes.String,required:true},
    date:{type:SchemaTypes.String,default:new Date()},
    col:{type:SchemaTypes.String,default:'#ff1245'}
})

const noteModel=mongoose.model(schemaName,NoteSchema);

export default noteModel;