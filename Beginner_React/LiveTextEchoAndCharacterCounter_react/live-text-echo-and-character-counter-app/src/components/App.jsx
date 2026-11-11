import TextInput from "./TextInput";
import TextEcho from "./TextEcho";
import CharacterCounter from "./CharacterCounter";
import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  return (
    <>
      <TextInput
        textInput={textInput}
        setTextInput={setTextInput} />
      <TextEcho
        textInput={textInput} />
    </>
  )
}

export default App;
