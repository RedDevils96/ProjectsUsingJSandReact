function CardBox({ boxSize }) {
    return (
        <>
            <div
                style={{
                    backgroundColor: 'cyan',
                    color: 'blue',
                    width: `${boxSize}px`,
                    height: `${boxSize}px`,
                    fontSize: `${boxSize / 5}px`
                }}
            >
                Hello!
            </div>
            width: '{boxSize}px',
            height: '{boxSize}px',
            fontSize: '{boxSize / 5}px'
        </>
    )
}

export default CardBox;