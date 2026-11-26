function DeleteTaskComponent({ taskIdToBeDeleted, taskList,
    setTaskList
}) {
    function handleOnClick() {
        setTaskList(taskList.filter(
            task =>
                task.taskId !== taskIdToBeDeleted
        ));
    }
    return (
        <>
            <button onClick={handleOnClick}>Delete Task</button>
        </>
    );
}

export default DeleteTaskComponent;