function ThemeChangeAction({ isDark, setIsDark,
    buttonValue, setButtonValue }) {
    function handleButtonClick(e) {
        if (isDark) {
            setButtonValue("Switch to Dark");
            setIsDark(false);
        }
        else {
            setButtonValue("Switch to Light");
            setIsDark(true)
        }
    }
    return (
        <>
            <button onClick={handleButtonClick}>{buttonValue}</button>
        </>
    )
}

export default ThemeChangeAction;