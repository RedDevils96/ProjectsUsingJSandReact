function TagBadge({ tagInputsList }) {
    return (
        <>
            <ul style={{
                listStyleType: "none",
            }}>
                {
                    tagInputsList.map(tagInputsLis => (
                        <li key={tagInputsLis.id}
                            style={{
                                backgroundColor: "aquamarine",
                                width: "10px",
                                padding: "5px",
                                margin: "5px",
                                display: "inline",
                                borderRadius: "6px"
                            }}>{tagInputsLis.tagInput}</li>
                    ))
                }
            </ul >
        </>
    )
}

export default TagBadge;