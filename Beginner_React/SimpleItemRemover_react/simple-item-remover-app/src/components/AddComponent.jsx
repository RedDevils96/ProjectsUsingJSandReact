function AddComponent({ fruitInput, fruitList, setFruitList, id, setId, setFruitInput }) {
    function handleOnClick() {
        setFruitList([
            ...fruitList,
            {
                id: id,
                fruit: fruitInput
            }
        ]);
        setId(prev => prev + 1);
        setFruitInput("");
    }
    return (
        <>
            <button onClick={handleOnClick}>Add</button>
        </>
    )
}

export default AddComponent;