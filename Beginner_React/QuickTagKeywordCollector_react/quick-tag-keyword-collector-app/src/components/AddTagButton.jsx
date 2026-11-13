function AddTagButton({ tagInputsList, setTagInputsList,
    tagIputtedByUser, id, setId, setTagIputtedByUser }) {
    function handleOnClick() {
        setId(id + 1);
        if (tagIputtedByUser.length != 0) {
            setTagInputsList([
                ...tagInputsList,
                {
                    id: id,
                    tagInput: tagIputtedByUser
                }
            ]);
        }
        setTagIputtedByUser('');
    }

    return (
        <>
            <button onClick={handleOnClick}>Add Tag</button>
        </>
    )
}
export default AddTagButton;