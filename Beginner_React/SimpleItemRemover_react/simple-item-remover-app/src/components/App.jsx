import { useState } from "react";

import InputTextComponent from "./InputTextComponent";
import AddComponent from "./AddComponent";
import ShowApplesComponent from "./ShowApplesComponent";

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
      <ShowApplesComponent
        fruitList={fruitList} />
    </>
  )
}

export default App;
