import { configureStore } from "@reduxjs/toolkit";
import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
    reducer: {
        notes: noteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch