import RemoveNoteButtonComponent from "./RemoveNoteButtonComponent";

function ShowNotesCardComponent({ notesList, setNotesList }) {
    return (
        <>
            <ul>
                {
                    notesList.map(
                        note =>
                            <li key={note.id}>
                                {note.inputNote}
                                <RemoveNoteButtonComponent
                                    notesList={notesList}
                                    setNotesList={setNotesList}
                                    deleteNoteid={note.id} />
                            </li>
                    )
                }
            </ul>
        </>
    )
}

export default ShowNotesCardComponent;