import api from "../../api/axios";
import type { Note } from "./noteType.ts";

export const createNoteAPI = async (
    data: Omit<Note, 'id' | 'created_at'>
):Promise<Note> => {
    const res = await api.post('/notes', data)
    return res.data
}

export const fetchNotesAPI = async () => {
    const res = await api.get('/notes')
    return res.data
}

export const deleteNoteAPI = async (id: number) => {
    await api.delete(`/notes/${id}`)
    return id
}

export const updateNoteAPI = async ({
    id,
    title,
    content
} : {
    id: number,
    title: string,
    content: string
}):Promise<Note> => {
    const res = await api.put(`/notes/${id}`, {title, content})
    return res.data
}