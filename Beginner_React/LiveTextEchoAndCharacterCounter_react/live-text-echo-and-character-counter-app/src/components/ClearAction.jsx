function ClearAction({ textInput, setTextInput }) {
    function handleOnClick() {
        setTextInput("");
    }
    return (
        <>
            <button onClick={handleOnClick}>Clear Input</button>
        </>
    )
}

export default ClearAction;