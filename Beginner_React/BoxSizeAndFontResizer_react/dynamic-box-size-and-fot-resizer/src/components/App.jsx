import CardBox from './CardBox.jsx';
import Action from './Action.jsx';
import StepsComponent from './StepsComponent.jsx';
import { useState } from 'react';

function App() {
  const [boxSize, setBoxSize] = useState(50);
  const [stepValue, setStepValue] = useState(10);

  return (
    <>
      <CardBox
        boxSize={boxSize}
      />
      <br />
      <br />
      <br />
      <StepsComponent
        stepValue={stepValue}
        setStepValue={setStepValue} />
      <br />
      <br />
      <br />
      <Action
        boxSize={boxSize}
        setBoxSize={setBoxSize}
        stepValue={stepValue}
      />
    </>
  )
}

export default App;
