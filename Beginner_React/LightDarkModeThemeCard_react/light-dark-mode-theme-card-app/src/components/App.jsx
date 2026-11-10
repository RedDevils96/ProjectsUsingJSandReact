import ProfileCard from "./ProfileCard";
import ThemeChangeAction from "./ThemeChangeAction";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [buttonValue, setButtonValue] = useState("Switch to Dark");

  return (
    <>
      <ProfileCard
        isDark={isDark} />
      <ThemeChangeAction
        isDark={isDark}
        setIsDark={setIsDark}
        buttonValue={buttonValue}
        setButtonValue={setButtonValue} />
    </>
  )
}

export default App;
