function DeleteFruitsComponent({ fruitList, setFruitList, targetId }) {
    function handleOnClick() {
        setFruitList(
            fruitList.filter(fruit =>
                fruit.id !== targetId
            )
        )
    }

    // filter ashole puro re-rener korche 
    // and a new array create korche ekhane 
    // with fruits whose ids dont match the id of the fruit 
    // whose delete button user clicked on
    // filter condition onujayi array create kore

    return (
        <>
            <button onClick={handleOnClick}>Delete</button>
        </>
    )
}

export default DeleteFruitsComponent;