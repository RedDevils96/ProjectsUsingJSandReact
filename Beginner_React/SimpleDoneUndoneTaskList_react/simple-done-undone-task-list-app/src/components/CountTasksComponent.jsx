function CountTasksComponent({ taskList }) {
    let totalTasks = taskList.length;
    let tasksDone = (
        taskList.filter(
            task => task.taskState
        )
    ).length;


    return (
        <>
            {(taskList.length == 0) ?
                ''
                :
                <h4>The number of tasks left to be done =
                    {tasksDone}/{totalTasks}</h4>}

        </>
    );
}

export default CountTasksComponent;