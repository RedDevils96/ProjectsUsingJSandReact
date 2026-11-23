function ClearAllNotesButton({ notesList, setNotesList }) {
    function handleOncLick() {
        setNotesList([]);
    }

    return (
        <>
            {
                (notesList.length > 0) ?
                    <button onClick={handleOncLick}>Clear All Notes</button>
                    :
                    ""
            }
        </>
    )
}
export default ClearAllNotesButton;