function StepsComponent({ stepValue, setStepValue }) {
    function handleChange(e) {
        setStepValue(e.target.value);
    }
    return (
        <>
            <label>
                Select Pixels:
                <select name="steps" value={stepValue} onChange={handleChange}>
                    <option value="10">10px</option>
                    <option value="20">20px</option>
                    <option value="30">30px</option>
                </select>
            </label>
        </>
    )
}

export default StepsComponent;