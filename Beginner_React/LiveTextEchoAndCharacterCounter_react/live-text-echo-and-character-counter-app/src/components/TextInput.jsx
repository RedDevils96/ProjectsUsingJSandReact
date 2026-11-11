function TextInput({ textInput, setTextInput }) {
    function handleOnChange(e) {
        setTextInput(e.target.value);
    }
    return (
        <>
            <label>
                Text Input: <input
                    name="textInput"
                    value={textInput}
                    onChange={handleOnChange} />
            </label>
        </>
    )
}

export default TextInput;