import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const sendUserData = createAsyncThunk("userSet",async(obj,{rejectWithValue})=>{
     const response = await axios.post('http://localhost:5000/add-user',obj);
     try{
     const result = await response.data;
      localStorage.setItem('user',JSON.stringify(result));
      return result;
     }
     catch(error){
          return rejectWithValue('opps error are found');
     }
})

export const getUser = createAsyncThunk("getUser",async(obj,{rejectWithValue})=>{
    const response = await axios.post('http://localhost:5000/one-user',obj);
    try{
        const result = await response.data;
        localStorage.setItem('user',JSON.stringify(result));
        return response.data;
    }
    catch(error){
        rejectWithValue('error found in find user');
    }
    
})

const initialState = {
    users:null,
    loading:false,
    error:null
 }
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers:{
    Logout(state,action){
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(sendUserData.pending,(state)=>{
        state.loading=true;
    })
    .addCase(sendUserData.fulfilled,(state,action)=>{
       // state.users=action.payload;
        state.loading=false;
        
    })
    .addCase(sendUserData.rejected,(state,action)=>{
         state.loading=false;
         state.error=action.payload;
    })
    .addCase(getUser.pending,(state)=>{
        state.loading=true;
    })
    .addCase(getUser.fulfilled,(state,action)=>{
         state.users=action.payload;
        state.loading=false;
       
    })
    .addCase(getUser.rejected,(state,action)=>{
        state.error=action.payload;
        state.loading=false;
    })
  },
})

// Action creators are generated for each case reducer function
export const {Logout}=userSlice.actions;
export default userSlice.reducer;