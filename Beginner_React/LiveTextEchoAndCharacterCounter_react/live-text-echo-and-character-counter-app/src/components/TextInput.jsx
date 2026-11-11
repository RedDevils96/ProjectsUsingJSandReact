function TextInput({ textInput, setTextInput }) {
    function handleChange(e){
        setTextInput(e.target.value);
    }
    return (
        <>
            <label>
                Text Input: <input
                    name="textInput"
                    value={textInput}
                    onChange={handleChange} />
            </label>
        </>
    )
}

export default TextInput;