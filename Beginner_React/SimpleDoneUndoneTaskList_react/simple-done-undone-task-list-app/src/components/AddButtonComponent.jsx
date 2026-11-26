function AddButtonComponent({ taskinput, taskId,
    setTaskId, taskList, setTaskList, setTaskInput }
) {
    function handleOnClick() {
        setTaskList(
            [
                ...taskList,
                {
                    taskId: taskId,
                    taskValue: taskinput,
                    taskState: false
                }
            ]
        );
        setTaskId(prev => prev + 1);
        setTaskInput('');
    }
    return (
        <>
            <button onClick={handleOnClick}>Add Task</button>
        </>
    );
}

export default AddButtonComponent;