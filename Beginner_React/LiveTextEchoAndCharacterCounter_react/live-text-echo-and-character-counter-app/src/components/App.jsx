import TextInput from "./TextInput";
import TextEcho from "./TextEcho";
import CharacterCounter from "./CharacterCounter";
import ClearAction from "./ClearAction";

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
      <CharacterCounter
        textInput={textInput} />
      <ClearAction
        textInput={textInput}
        setTextInput={setTextInput} />
    </>
  )
}

export default App;
