import NoteForm from "../components/NoteForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getNotes, removeNote } from "../features/notes/noteSlice"
import type { RootState } from "../app/store"
import NoteList from "../components/NoteList"
import { useNotify } from "../hooks/useNotify"

const NotesPage = () => {
    const dispatch = useDispatch<any>()
    const notes = useSelector((state: RootState) => state.notes.list)
    const notify = useNotify()

    const handleDelete = (id: number) => {
        dispatch(removeNote(id))
        notify.success("Deleted success")
    }

    useEffect(() => {
        dispatch(getNotes())
    }, [dispatch])
    console.log(notes)

    return (
        <div>
            <h3>Hello Notes</h3>
            <NoteForm/>
            <NoteList 
                notes={notes}
                onDelete={handleDelete}
                />
        </div>
    )
}

export default NotesPage