import { NotesProvider } from "./contexts/NoteContext";
import NoteList from "./notes/NoteList"
import NotesForm from "./notes/NotesForm";

function App() {

    return (
        <div className="App">
            <NotesProvider>
            <NotesForm />
            <NoteList />
            </NotesProvider>
        </div>
    )
}

export default App;

