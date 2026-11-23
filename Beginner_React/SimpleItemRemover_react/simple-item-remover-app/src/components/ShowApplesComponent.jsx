function ShowFruitesComponent({ fruitList }) {
    return (
        <div>
            <h1>{(fruitList.length > 0) ? "Fruits in the basket are - " : ""}</h1>
            <ul>
                {
                    fruitList.map(
                        fruit => (
                            <li key={fruit.id}>{fruit.fruit}</li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default ShowFruitesComponent;