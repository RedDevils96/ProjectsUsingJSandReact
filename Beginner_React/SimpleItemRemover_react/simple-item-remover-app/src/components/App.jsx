import { useState } from "react";

import InputTextComponent from "./InputTextComponent";
import AddComponent from "./AddComponent";
import ShowFruitsComponent from "./ShowFruitsComponent";
import DeleteFruitsComponent from "./DeleteFruitsComponent";

function App() {
  const [fruitList, setFruitList] = useState([]);
  const [fruitInput, setFruitInput] = useState("");
  const [id, setId] = useState(0);
  return (
    <>
      <InputTextComponent
        fruitInput={fruitInput}
        setFruitInput={setFruitInput} />
      <AddComponent
        fruitInput={fruitInput}
        fruitList={fruitList}
        setFruitList={setFruitList}
        id={id}
        setId={setId}
      />
      <ShowFruitsComponent
        fruitList={fruitList}
        setFruitList={setFruitList} />
    </>
  )
}

export default App;
