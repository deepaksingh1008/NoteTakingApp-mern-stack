import express from 'express';
import { AppConstant } from '../../../shared/utils/appConstant.js';
import { noteController } from '../controllers/note-controller.js';
const NOTE_ROUTES = AppConstant.ROUTES.NOTES;

const noteRouter = express.Router();

noteRouter.post(NOTE_ROUTES.ADD,noteController.AddNote);
noteRouter.get(NOTE_ROUTES.GET_ALL_NOTES,noteController.GetAllNotes);
noteRouter.delete(NOTE_ROUTES.DELETE_NOTE,noteController.DeleteNoteByID);
noteRouter.put(NOTE_ROUTES.UPDATE_NOTE,noteController.UpdateNoteById);
noteRouter.get(NOTE_ROUTES.GET_SINGLE_NOTE,noteController.GetNoteById);
noteRouter.get(NOTE_ROUTES.SEARCH_NOTE,noteController.searchNote);
noteRouter.get(NOTE_ROUTES.GET_ONE_NOTE,noteController.getSingleNote)

export default noteRouter;