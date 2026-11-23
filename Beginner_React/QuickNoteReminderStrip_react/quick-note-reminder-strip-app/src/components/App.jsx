import ActiveNotesComponent from "./ActiveNotesComponent";
import AddComponent from "./AddComponent";
import ClearAllNotesButton from "./ClearAllNotesButton";
import EmptyListMessage from "./EmptyListMessage";
import NoteInputComponent from "./NoteInputComponent";
import ShowNotesCardComponent from "./ShowNotesCardComponent";

import { useState } from "react";

function App() {
  const [inputNote, setInputNote] = useState("");
  const [id, setId] = useState(0);
  const [notesList, setNotesList] = useState([]);

  return (
    <>
      <NoteInputComponent
        inputNote={inputNote}
        setInputNote={setInputNote} />

      <AddComponent
        inputNote={inputNote}
        setInputNote={setInputNote}
        id={id}
        setId={setId}
        notesList={notesList}
        setNotesList={setNotesList} />

      <EmptyListMessage
        notesList={notesList} />

      <ShowNotesCardComponent
        notesList={notesList}
        setNotesList={setNotesList} />

      <ActiveNotesComponent />

      <ClearAllNotesButton
        notesList={notesList}
        setNotesList={setNotesList} />
    </>
  )
}

export default App;
