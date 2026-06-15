import { useContext } from "react";
import { NotesContext } from "../contexts/NoteContext";
import Note from "./Note";


function NoteList() {
    const { notes } = useContext(NotesContext);
    return (
        <div>
            <p style={{ textAlign: "right" }}>Tienes {notes.length} notas guardadas </p>
            {
                notes.map(note => <Note key={note.id} id={note.id} title={note.title} message={note.message} />)
            }
        </div>
    )
}

export default NoteList;
