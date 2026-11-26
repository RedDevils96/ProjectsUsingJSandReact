function ShowEmptyTaskMessageComponent({ taskList }) {
    return (
        <>
            {taskList.length == 0 ?
                <h4>You dont have any Tasks Added.Please add a task.</h4>
                :
                ''}
        </>
    );
}

export default ShowEmptyTaskMessageComponent;