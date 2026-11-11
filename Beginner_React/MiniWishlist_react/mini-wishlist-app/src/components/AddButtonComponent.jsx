function AddButtonComponent({ textInput, list,
    setList, id, setId, setTextInput }) {
    function handleOnClick() {
        setId(id + 1);
        setList([...list, { id: id, textInput: textInput }]);
        setTextInput("");
        console.log(id);
    }
    return (
        <>
            <button onClick={handleOnClick}>Add to List</button>
        </>
    )
}

export default AddButtonComponent;