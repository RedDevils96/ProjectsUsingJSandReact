function TaskStateComponent({ taskIdToBeToggled, taskList,
    task, setTaskList }) {
    function handleOnClick() {
        setTaskList(
            taskList.map(
                task => {
                    if (task.taskId === taskIdToBeToggled) {
                        return {
                            taskId: task.taskId,
                            taskValue: task.taskValue,
                            taskState: !task.taskState
                        }
                        //or we can use
                        //return {
                        //    ...task,
                        //    taskState: !task.taskState
                        //}
                    }
                    else {
                        return task
                    }
                }
            )
        );
    }

    return (
        <>
            <button onClick={handleOnClick}>
                {(!task.taskState) ? 'Mark as Done' : 'Mark as Un-Done'}
            </button>
        </>
    );
}

export default TaskStateComponent;