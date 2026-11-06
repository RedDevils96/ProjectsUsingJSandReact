function StepSelector({ batteryStep, setStepValue }) {
    function handleChange(e) {
        setStepValue(e.target.value);
    }
    return (
        <>
            <label>
                Select Battery Level:
                <select name="batteryLevel"
                    value={batteryStep}
                    onChange={handleChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                </select>
            </label>
        </>
    )
}

export default StepSelector;