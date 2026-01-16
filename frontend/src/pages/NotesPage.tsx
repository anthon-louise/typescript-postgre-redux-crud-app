import NoteForm from "../components/NoteForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getNotes } from "../features/notes/noteSlice"
import type { RootState } from "../app/store"
import NoteList from "../components/NoteList"

const NotesPage = () => {
    const dispatch = useDispatch<any>()
    const notes = useSelector((state: RootState) => state.notes.list)

    useEffect(() => {
        dispatch(getNotes())
    }, [dispatch])
    console.log(notes)

    return (
        <div>
            <h3>Hello Notes</h3>
            <NoteForm/>
            <NoteList notes={notes}/>
        </div>
    )
}

export default NotesPage