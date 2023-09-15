import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNote = createAsyncThunk(
  "add/notes",
  async (obj, { rejectWithValue }) => {
    const response = await axios.post("http://localhost:5000/add-note", obj);
    try {
      const result = await response.data;
      return result;
    } catch (err) {
      rejectWithValue("error are found in adding node in redux");
    }
  }
);

export const getNotes = createAsyncThunk(
  "get/notes",
  async (id, { rejectWithValue }) => {
    const response = await axios.get(`http://localhost:5000/single-note/${id}`);
    try {
      const result = await response.data;
      return result;
    } catch (err) {
      rejectWithValue("error are found in getting notes in redux");
    }
  }
);
export const deleteNote = createAsyncThunk("delete/note",async(id,{rejectWithValue})=>{
    const response=await axios.delete(`http://localhost:5000/delete-note/${id}`);
    try{
        const result=await response.data;
        return result;
    }
    catch(err){
        rejectWithValue('error are found in deleting note in redux');
        }
});
export const updateNote = createAsyncThunk("update/note",async(obj,{rejectWithValue})=>{
    const id = obj.id;
    const data=obj.data;
    const response=await axios.put(`http://localhost:5000/update-note/${id}`,data);
    try{
        const result=await response.data;
        return result;
        }
        catch(err){
            rejectWithValue('error are found in updating note in redux');
        }
})

export const searchNotes = createAsyncThunk('search/note',async(key,{rejectWithValue})=>{
       const response = axios.get(`http://localhost:5000/search-note/${key}`);
       try{
             const result = await response.data;
             return result;
       }
       catch(err){
         rejectWithValue('error found in searching notes');
       }
})
export const getSingleNotes = createAsyncThunk('getSingleNote/note',async(key,{rejectWithValue})=>{
  console.log("key-->",key)
  const response = axios.get(`http://localhost:5000/one-note/${key}`);
  console.log("response",response)
  try{
        const result = await response.data;
        console.log("result-->",result)
        return result;
  }
  catch(err){
    rejectWithValue('error found in searching notes');
  }
})

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesSlice = createSlice({
  name: "noteSlice",
  initialState,
  reducers: {
    sortNote:(state,action)=>{
      state.notes.sort((a1,a2)=>{
        return a1>a2;
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNote.fulfilled, (state, action) => {
      //  console.log("action is ", action.payload);
        state.loading = false;
      })
      .addCase(addNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
      //  console.log("action is ", action.payload);
        state.notes=action.payload
        state.loading = false;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        console.log("action is ", action.payload);
        //state.notes=action.payload
        state.loading = false;
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateNote.fulfilled, (state, action) => {
      console.log("action is ", action.payload);
        state.notes=action.payload
        state.loading = false;
      })
      .addCase(updateNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchNotes.fulfilled, (state, action) => {
      console.log("action is ", action.payload);
        state.notes=action.payload
        state.loading = false;
      })
      .addCase(searchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSingleNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleNotes.fulfilled, (state, action) => {
      console.log("action is ", action.payload);
        //state.data=action.payload
        state.loading = false;
      })
      .addCase(getSingleNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default notesSlice.reducer;
export const {sortNote}=notesSlice.actions;
