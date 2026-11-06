import { useState } from 'react';

import Battery from './Battery.jsx';
import ActionControls from './ActionControls.jsx';
import StepSelector from './StepSelector.jsx';

function App() {
  const [batteryPercentage, setBatteryPercentage] = useState(50);
  const [stepValue, setStepValue] = useState(5);

  return (
    <>
      <Battery batteryPercentage={batteryPercentage} />
      <br />
      <StepSelector stepValue={stepValue}
        setStepValue={setStepValue} />
      <br />
      <ActionControls batteryPercentage={batteryPercentage}
        setBatteryPercentage={setBatteryPercentage}
        stepValue={stepValue} />

    </>
  )
}

export default App;
