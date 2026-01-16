import { noteSchema } from "../schemas/noteSchema.js";
import { Request, Response } from "express";
import * as service from '../services/noteService.js'

export const addNote = async (req: Request, res: Response) => {
    const data = noteSchema.parse(req.body)
    const note = await service.createNote(data.title, data.content)
    res.status(201).json(note)
}

export const getAllNotes = async (_: Request, res: Response) => {
    const notes = await service.getNotes()
    res.json(notes)
}