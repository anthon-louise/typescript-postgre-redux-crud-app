import { isJSDocReturnTag } from "typescript"
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

export const getNotesRepo = async () => {
    const {rows} = await db.query(`
        SELECT *
        FROM notes
        ORDER BY id DESC
        `)
    return rows
}

export const deleteNotesRepo = async (id: number) => {
    const result = await db.query(`
        DELETE
        FROM notes
        WHERE id=$1
        `, [id])
    return result.rowCount
}

export const updateNoteRepo = async (
    id: number,
    title: string,
    content: string
) => {
    const {rows} = await db.query(`
        UPDATE notes
        SET title=$1, content=$2
        WHERE id=$3
        RETURNING *
        `, [title, content, id])
    return rows[0]
}