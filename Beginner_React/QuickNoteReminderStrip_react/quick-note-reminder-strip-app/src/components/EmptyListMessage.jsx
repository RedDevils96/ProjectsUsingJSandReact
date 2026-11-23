function EmptyListMessage({ notesList }) {
    return (
        <>
            {(notesList.length > 0) ?
                "" : <h4>Your Notes are emply! Please add some notes.</h4>}
        </>
    )
}

export default EmptyListMessage;