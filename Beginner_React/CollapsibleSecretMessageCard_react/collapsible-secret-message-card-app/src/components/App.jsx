import Card from "./Card";
import ToggleButton from "./ToggleButton";
import SecretMessageBox from "./SecretMessageBox";

import { useState } from "react";

function App() {
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [toggleButtonMessage, setToggleButtonMessage] = useState("Show Secret Message");
  return (
    <>
      <Card />
      <SecretMessageBox
        showSecretMessage={showSecretMessage} />
      <ToggleButton
        showSecretMessage={showSecretMessage}
        setShowSecretMessage={setShowSecretMessage}
        toggleButtonMessage={toggleButtonMessage}
        setToggleButtonMessage={setToggleButtonMessage}
      />
    </>
  )
}

export default App;
