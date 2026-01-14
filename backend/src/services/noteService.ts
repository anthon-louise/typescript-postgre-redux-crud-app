import { AppError } from "../utils/AppError.js"
import * as repo from '../repositories/noteRepo.js'

export const createNote = async (title: string, content: string) => {
    return repo.createNoteRepo(title, content)
}