import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { createNoteAPI } from './noteService'
import type { Note } from './noteType'

interface NoteState {
    list: Note[],
    loading: boolean
}

const initialState: NoteState = {
    list: [],
    loading: false
}

export const addNote = createAsyncThunk('notes/add', createNoteAPI)

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addNote.fulfilled, (state, action) => {
                state.list.unshift(action.payload)
            })
    }
})

export default noteSlice.reducer