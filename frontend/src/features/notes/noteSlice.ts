import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { createNoteAPI, deleteNoteAPI, fetchNotesAPI, updateNoteAPI } from './noteService'
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
export const editNote = createAsyncThunk('notes/edit', updateNoteAPI)

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
            .addCase(editNote.fulfilled, (state, action) => {
                const index = state.list.findIndex((n) => n.id === action.payload.id)
                if (index !== -1) state.list[index] = action.payload
            })
    }
})

export default noteSlice.reducer