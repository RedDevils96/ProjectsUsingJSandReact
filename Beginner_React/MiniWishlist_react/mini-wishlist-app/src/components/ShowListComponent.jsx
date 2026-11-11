function ShowListComponent({ list }) {
    return (
        <>
            <ul>
                {
                    list.map(lis => (
                        <li key={lis.id}>{lis.textInput}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ShowListComponent;