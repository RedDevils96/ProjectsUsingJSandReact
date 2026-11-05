function Action({ boxSize, setBoxSize, stepValue }) {
    function handleClick(e) {
        if (e.target.textContent == "-") {
            if (!((boxSize - parseInt(stepValue)) < 50)) {
                setBoxSize(boxSize - parseInt(stepValue));
            }
        }
        else if (e.target.textContent == "+") {
            setBoxSize(boxSize + parseInt(stepValue));
        }
        else {
            setBoxSize(50);
        }
    }
    return (
        <>
            <button onClick={handleClick}>-</button>
            <button onClick={handleClick}>Reset</button>
            <button onClick={handleClick}>+</button>
        </>
    )
}

export default Action;