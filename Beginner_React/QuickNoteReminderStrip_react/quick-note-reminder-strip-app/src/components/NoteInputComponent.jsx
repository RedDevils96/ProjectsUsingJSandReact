function NoteInputComponent({ inputNote, setInputNote }) {
    function handleOnChange(e) {
        setInputNote(e.target.value);
    }
    return (
        <>
            <label>
                Enter a Quick Note -
                <input value={inputNote} onChange={handleOnChange} />
            </label>
        </>
    )
}

export default NoteInputComponent;