function TextInputComponenet({ taskinput, setTaskInput }) {

    function handleOnChange(e) {
        setTaskInput(e.target.value);
    }

    return (
        <>
            <label>
                Enter your Task :-
                <input value={taskinput} onChange={handleOnChange} />
            </label>
        </>
    );
}

export default TextInputComponenet;