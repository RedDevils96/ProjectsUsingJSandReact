function ActionControls({ batteryPercentage, setBatteryPercentage, stepValue }) {
    function handleClick(e) {
        if (e.target.textContent == "-") {
            if (batteryPercentage - parseInt(stepValue) < 0) {
                setBatteryPercentage(0);
            }
            else {
                setBatteryPercentage(batteryPercentage - parseInt(stepValue));
            }
        }
        else if (e.target.textContent == "+") {
            if (batteryPercentage + parseInt(stepValue) > 100) {
                setBatteryPercentage(100);
            }
            else {
                setBatteryPercentage(batteryPercentage + parseInt(stepValue));
            }
        }
        else {
            setBatteryPercentage(50);
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

export default ActionControls;