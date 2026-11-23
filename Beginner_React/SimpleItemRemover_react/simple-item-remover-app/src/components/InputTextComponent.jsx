function InputTextComponent({ fruitInput, setFruitInput }) {
    function handleOnChange(e) {
        setFruitInput(e.target.value);
    }
    return (
        <>
            <label>
                Input the apples in basket -
                <input value={fruitInput} onChange={handleOnChange} />
            </label>
        </>
    )
}

export default InputTextComponent;