function TextInputComponent({ textInput, setTextInput }) {
    function handleOnChange(e) {
        setTextInput(e.target.value);
    }
    return (
        <>
            <label>
                Provide your Input:
                <input
                    name="textInput"
                    value={textInput}
                    onChange={handleOnChange} />
            </label>
        </>
    )
}

export default TextInputComponent;