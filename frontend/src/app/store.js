import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import notesSlice from '../features/notes/noteSlice'
export const store = configureStore({
  reducer: {
    user:userSlice,
    note:notesSlice,
  },
})