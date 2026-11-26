import AddButtonComponent from "./AddButtonComponent";
import ShowTaskComponent from "./ShowTaskComponent";
import TextInputComponenet from "./TextInputComponenet";

import { useState } from "react";

function App() {

  const [taskinput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [taskId, setTaskId] = useState(1);

  return (
    <>
      <TextInputComponenet
        taskinput={taskinput}
        setTaskInput={setTaskInput}
      />

      <AddButtonComponent
        taskinput={taskinput}
        taskId={taskId}
        setTaskId={setTaskId}
        taskList={taskList}
        setTaskList={setTaskList}
        setTaskInput={setTaskInput}
      />

      <ShowTaskComponent
        taskList={taskList}
        setTaskList={setTaskList}
      />

    </>
  );
}

export default App;
