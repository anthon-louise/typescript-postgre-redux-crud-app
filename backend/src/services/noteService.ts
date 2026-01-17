import { AppError } from "../utils/AppError.js"
import * as repo from '../repositories/noteRepo.js'

export const createNote = async (title: string, content: string) => {
    return repo.createNoteRepo(title, content)
}

export const getNotes  = async () => {
    return repo.getNotesRepo()
}

export const deleteNote = async (id: number) => {
    const deleted = repo.deleteNotesRepo(id)
    if (!deleted) throw new AppError("Note not found", 404)
}

export const updateNote = async (
    id: number,
    title: string,
    content: string
) => {
    const note = await repo.updateNoteRepo(id, title, content)
    if (!note) throw new AppError("Note not found", 404)
    return note
}