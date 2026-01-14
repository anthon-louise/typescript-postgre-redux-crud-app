import { db } from "../config/db.js"

export const createNoteRepo = async (title: string, content: string) => {
    const {rows} = await db.query(`
        INSERT INTO
        notes (title, content)
        VALUES ($1, $2)
        RETURNING *
        `, [title, content])
    return rows[0]
}