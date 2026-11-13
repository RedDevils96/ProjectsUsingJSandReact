function EmptyStateNotice({ tagInputsList }) {
    return (
        <>
            <div>
                {(tagInputsList.length == 0) ? "Please add some tags!" : ""}
            </div>
        </>
    )
}

export default EmptyStateNotice;