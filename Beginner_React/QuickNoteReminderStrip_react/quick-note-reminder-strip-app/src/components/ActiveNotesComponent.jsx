function ActiveNotesComponent({ notesList }) {
    return (
        <>
            {
                (notesList.length > 0) ?
                    <h5> Active Notes = {notesList.length}</h5>
                    :
                    ""
            }
        </>
    )
}

export default ActiveNotesComponent;