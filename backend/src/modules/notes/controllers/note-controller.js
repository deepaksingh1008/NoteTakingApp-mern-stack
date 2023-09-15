import { AppConstant } from "../../../shared/utils/appConstant.js";
import { noteService } from "../services/note-services.js";
const STATUS_CODE = AppConstant.STATUS_CODE;

export const noteController = {
    async AddNote(request,response){
        const obj = request.body;
        try{
             const docs = await noteService.addNote(obj);
             response.status(STATUS_CODE.SUCCESS).json({message:"Note Added Successfully"});
        }
        catch(err){
           response.status(STATUS_CODE.SERVER_ERROR).json({message:"Error In Note Added"});
        }
    },
    async GetAllNotes(request,response){
        try{
                const docs = await noteService.getNote();
                response.status(STATUS_CODE.SUCCESS).json(docs);
        }
        catch(err){
            console.log("error in getting all notes",err);
            response.status(STATUS_CODE.SERVER_ERROR).json({message:"error in getting note"});
        }
    },
    async UpdateNoteById(request,response){
        const id = request.params.id;
        const obj = request.body;
        try{
            const docs = await noteService.updateNote(id,obj);
            response.status(STATUS_CODE.SUCCESS).json({message:"Note Updated Successfully"})
        }
        catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message:"Error in Update Notes"})
        }
    },
    async DeleteNoteByID(request,response){
        let id = request.params.id;
        try{
             const docs = await noteService.deleteNote(id);
             response.status(STATUS_CODE.SUCCESS).json({message:"Note Delete Successfully"});
        }
        catch(err){
            console.log("error in deleting note by id",err);
            response.status(STATUS_CODE.SERVER_ERROR).json({message:"error in deleting note by id"});
        }
    },
    async GetNoteById(request,response){
        let id = request.params.id;
        try{
            const docs = await noteService.getNoteById(id);
            response.status(STATUS_CODE.SUCCESS).json(docs);

        }
        catch(err){
            console.log("error in get notes by id",err);
            response.status(STATUS_CODE.SERVER_ERROR).json({message:"error in get notes by id"});
        }
    },
    async searchNote(request,response){
        console.log(request.params.key);
        const key = request.params.key;
        try{
            const docs = await noteService.searchNotesByKey(key);
            response.status(STATUS_CODE.SUCCESS).json(docs);
        }
        catch(err){
            console.log('error in search note',err);
            response.status(STATUS_CODE.SERVER_ERROR).json({message:"error in to search note"});
        }
    },
    async getSingleNote(request,response){
        let id = request.params.id;
        try{
            const docs = await noteService.getSingleNote(id);
            response.status(STATUS_CODE.SUCCESS).json(docs);
        }
        catch(err){
            console.log('error in search note',err);
            response.status(STATUS_CODE.SERVER_ERROR).json({message:"error in to get single note"});
        }
    },
}
