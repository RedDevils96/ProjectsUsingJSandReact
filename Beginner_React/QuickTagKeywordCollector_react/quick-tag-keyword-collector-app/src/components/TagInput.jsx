function TagInput({ tagIputtedByUser, setTagIputtedByUser }) {
    function handleOnChange(e) {
        setTagIputtedByUser(e.target.value);
    }
    return (
        <>
            <label>
                Input your Tag: <input value={tagIputtedByUser}
                    onChange={handleOnChange} />
            </label>
        </>
    )
}

export default TagInput;