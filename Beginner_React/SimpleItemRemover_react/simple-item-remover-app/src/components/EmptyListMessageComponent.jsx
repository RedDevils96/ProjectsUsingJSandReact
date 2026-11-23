function EmptyListMessageComponent({ fruitList }) {
    return (
        <>
            <h1>{
                (fruitList.length > 0) ?
                    "" : "Your Basket is Empty! Please add some fruits."}</h1>
        </>
    )
}

export default EmptyListMessageComponent;