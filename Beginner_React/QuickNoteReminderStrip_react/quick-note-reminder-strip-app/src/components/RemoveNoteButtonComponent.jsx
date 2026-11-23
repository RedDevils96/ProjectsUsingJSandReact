function RemoveNoteButtonComponent({ notesList, setNotesList,
    deleteNoteid }) {
    function handleOnClick() {
        setNotesList(
            notesList.filter(
                note =>
                    note.id !== deleteNoteid
            )
        );
    }

    return (
        <>
            <button onClick={handleOnClick}>Remove Note</button>
        </>
    )
}

export default RemoveNoteButtonComponent;