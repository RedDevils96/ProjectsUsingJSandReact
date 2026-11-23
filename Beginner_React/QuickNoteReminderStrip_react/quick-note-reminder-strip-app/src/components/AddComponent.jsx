function AddComponent({ inputNote, setInputNote, id, setId,
    notesList, setNotesList }) {
    function handleOnClick() {
        setNotesList(
            [
                ...notesList,
                {
                    id: id,
                    inputNote: inputNote
                }
            ]
        );
        setId(prev => prev + 1);
        setInputNote("");
    }
    return (
        <>
            <button onClick={handleOnClick}>Add Note</button>
        </>
    )
}

export default AddComponent;