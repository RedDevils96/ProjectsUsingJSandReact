function QuantityActions({ steps, quantityValue, upOrDownQuantity }) {
    function handleClick(e) {
        if (e.target.textContent == "-") {
            upOrDownQuantity(quantityValue - parseInt(steps));
        }
        else if (e.target.textContent == "+") {
            upOrDownQuantity(quantityValue + parseInt(steps));
        }
        else {
            upOrDownQuantity(1);
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

export default QuantityActions;