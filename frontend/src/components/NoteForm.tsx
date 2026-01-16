import React, { useState } from "react"
import {useDispatch} from "react-redux"
import { addNote } from "../features/notes/noteSlice"
import { useNotify } from "../hooks/useNotify"
import Button from "./Button"

const NoteForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch<any>()
    const notify = useNotify()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(addNote({title, content}))
        setTitle("")
        setContent("")
        notify.success("note created")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            <Button text="Create Note" type="submit"/>
        </form>
    )
}

export default NoteForm