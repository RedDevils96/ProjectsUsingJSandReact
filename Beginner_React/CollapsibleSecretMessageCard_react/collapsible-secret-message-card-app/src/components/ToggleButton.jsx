function ToggleButton({ showSecretMessage, setShowSecretMessage,
    toggleButtonMessage, setToggleButtonMessage }) {

    function handleOnClick() {
        if (showSecretMessage) {
            setToggleButtonMessage("Show Secret Message");
            setShowSecretMessage(false);
        }
        else {
            setToggleButtonMessage("Hide Secret Message");
            setShowSecretMessage(true);
        }
    }
    return (
        <button onClick={handleOnClick}>{toggleButtonMessage}</button>
    )
}

export default ToggleButton;