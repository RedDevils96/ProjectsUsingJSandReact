import DeleteTaskComponent from "./DeleteTaskComponent";
import TaskStateComponent from "./TaskStateComponent";

function ShowTaskComponent({ taskList, setTaskList }) {
    return (
        <>
            {(taskList.length == 0) ?
                '' :
                <h1>The task List below - </h1>}
            <ul>
                {taskList.map(
                    task =>
                        <li key={task.taskId} style={
                            (task.taskState) ?
                                { textDecoration: 'line-through' }
                                :
                                { textDecoration: 'none' }
                        }>
                            {task.taskValue}
                            <TaskStateComponent
                                taskIdToBeToggled={task.taskId}
                                taskList={taskList}
                                task={task}
                                setTaskList={setTaskList} />
                            <DeleteTaskComponent
                                taskIdToBeDeleted={task.taskId}
                                taskList={taskList}
                                setTaskList={setTaskList}
                            />
                        </li>
                )}
            </ul >
        </>
    );
}

export default ShowTaskComponent;