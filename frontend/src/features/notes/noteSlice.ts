import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { createNoteAPI, deleteNoteAPI, fetchNotesAPI } from './noteService'
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
export const getNotes = createAsyncThunk('notes/get', fetchNotesAPI)
export const removeNote = createAsyncThunk('notes/delete', deleteNoteAPI)

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addNote.fulfilled, (state, action) => {
                state.list.unshift(action.payload)
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.list = action.payload
            })
            .addCase(removeNote.fulfilled, (state, action) => {
                state.list = state.list.filter((n) => n.id !== action.payload)
            })
    }
})

export default noteSlice.reducer