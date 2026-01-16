import type { Note } from "../features/notes/noteType"

interface Props {
    notes: Note[]
}

export const NoteList = ({
 notes
}: Props) => {
    if (!notes.length) return <p>No notes yet</p>

    return (
        <ul>
            {
                notes.map((note) => (
                    <li key={note.id}>
                        {note.title} - {note.content}
                    </li>
                ))
            }
        </ul>
    )
}

export default NoteList