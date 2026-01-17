import type { Note } from "../features/notes/noteType"
import Button from "./Button"
import { useState } from "react"

interface Props {
    notes: Note[],
    onDelete: (id: number) => void,
    onEdit: (id: number, title: string, content: string) => void
}

export const NoteList = ({
    notes,
    onDelete,
    onEdit
}: Props) => {
    const [editingId, setEditingId] = useState<number | null>(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const startEdit = (note: Note) => {
        setEditingId(note.id)
        setTitle(note.title)
        setContent(note.content)
    }

    const cancelEdit = () => {
        setEditingId(null)
        setContent('')
        setTitle('')
    }

    const saveEdit = () => {
        if (editingId === null) return
        onEdit(editingId, title, content)
        cancelEdit()
    }

    if (!notes.length) return <p>No notes yet</p>

    return (
        <ul>
            {
                notes.map((note) => (
                    <li key={note.id}>
                        {
                            editingId === note.id ? (
                                <>
                                    <input
                                        type="text"
                                        placeholder="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="content"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                    <Button text="☑️" onClick={saveEdit}/>
                                    <Button text="✖️" onClick={cancelEdit}/>
                                </>
                            ) : (
                                <>
                                    {note.title} - {note.content}
                                    <Button text="✏️" onClick={() => startEdit(note)} />
                                    <Button text="🗑️" onClick={() => onDelete(note.id)} />
                                </>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default NoteList