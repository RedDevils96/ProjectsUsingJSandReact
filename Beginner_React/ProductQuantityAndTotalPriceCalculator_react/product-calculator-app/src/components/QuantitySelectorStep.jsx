function QuantitySelectorStep({steps, setSteps}) {
    function handleChange(e){
        setSteps(e.target.value);
    }
    return (
        <>
            <label> Select Quantity Step : 
                <select name = "stepDropdown" value = {steps} onChange = {handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={5}>5</option>
                </select>
            </label>
        </>
    )
}

export default QuantitySelectorStep;