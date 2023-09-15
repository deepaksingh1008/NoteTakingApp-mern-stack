import noteModel from '../models/note-model.js';

export const noteService = {
    async addNote(noteObject){
        try{
            const docs = await noteModel.create(noteObject);
            return docs;
        }
        catch(err){
            throw err;
        }
    },
    async getNote(){
       try{
          const docs = await noteModel.find({});
           return docs;
       }
       catch(err){
         throw err;
       }
    },
    async updateNote(id, updatedData){
       try{
        const docs = await noteModel.updateOne({_id: id}, {$set: updatedData});
            return docs;
       }
       catch(err){
        throw err;
       }
    },
    async deleteNote(id){
        try{
             const docs = await noteModel.deleteOne({_id:id});
             return docs;
        }
        catch(err){
            throw err;
        }
    },
    async getNoteById(id){
        try{
             const docs = await noteModel.find({id:id});
             return docs;
        }
        catch(err){
            throw err;
        }
    },
    async searchNotesByKey(obj){
          try{
              let result = await noteModel.find({
                "$or":[
                    {title:obj},
                    {desc:obj}
                ]
              });
              return result;
          }
          catch(err){
            throw err;
          }
    },
    async getSingleNote(id){
        try{
          const docs = await noteModel.find({_id:id})
           return docs;
        }
        catch(err){
            throw err;
        }
    },
}