import TextInputComponent from "./TextInputComponent";
import AddButtonComponent from "./AddButtonComponent";
import ShowListComponent from "./ShowListComponent";
import MessageComponent from "./MessageComponent";

import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);

  return (
    <>
      <TextInputComponent
        textInput={textInput}
        setTextInput={setTextInput} />
      <AddButtonComponent
        textInput={textInput}
        list={list}
        setList={setList}
        id={id}
        setId={setId}
        setTextInput={setTextInput} />
      <ShowListComponent
        textInput={textInput}
        list={list} />
      <MessageComponent
        list={list} />
    </>
  )
}

export default App;
