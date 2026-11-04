import Counter from "./Counter";
import Step from "./Step";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleSubtractClick() {
    setCount(count - parseInt(step));
  }

  function handleResetClick() {
    setCount(0);
  }

  function handleAdditionClick() {
    setCount(count + parseInt(step));
  }

  const handleChange = (e) => {
    setStep(e.target.value)
  }

  return (<div>
    <Counter value={count} />
    <div>
      <label>Step:
        <select name="step" value = {step} onChange={handleChange}>
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </label>
    </div>
    <button onClick={handleSubtractClick}>-</button>
    <button onClick={handleResetClick}>Reset</button>
    <button onClick={handleAdditionClick}>+</button>
  </div>
  )
}

export default App;
