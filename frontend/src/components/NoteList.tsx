import type { Note } from "../features/notes/noteType"
import Button from "./Button"

interface Props {
    notes: Note[],
    onDelete: (id: number) => void
}

export const NoteList = ({
 notes,
 onDelete
}: Props) => {
    if (!notes.length) return <p>No notes yet</p>

    return (
        <ul>
            {
                notes.map((note) => (
                    <li key={note.id}>
                        {note.title} - {note.content}
                        <Button text="🗑️" onClick={() => onDelete(note.id)}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default NoteList