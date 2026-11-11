function MessageComponent({ list }) {
    return (
        <>
            <p>{list.length === 0
                ? "Please Add Something to the List." : ""}</p>
        </>
    )
}

export default MessageComponent;