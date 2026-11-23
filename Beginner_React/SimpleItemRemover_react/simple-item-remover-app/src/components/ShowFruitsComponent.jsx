import DeleteFruitsComponent from "./DeleteFruitsComponent";

function ShowFruitsComponent({ fruitList, setFruitList }) {
    return (
        <div>
            <h1>{(fruitList.length > 0) ? "Fruits in the basket are - " : ""}</h1>
            <ul>
                {
                    fruitList.map(
                        fruit => (
                            <li key={fruit.id}>
                                {fruit.fruit}
                                <DeleteFruitsComponent
                                    fruitList={fruitList}
                                    setFruitList={setFruitList}
                                    targetId={fruit.id} /></li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default ShowFruitsComponent;