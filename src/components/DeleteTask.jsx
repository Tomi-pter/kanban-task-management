function DeleteTask({ taskTitle, setDeleteTask, status }) {
  return (
    <>
      <h1>Delete this task?</h1>
      <p>
        Are you sure you want to delete the '{taskTitle}' task and its subtasks?
        This action cannot be reversed.
      </p>
      <button type="button">Delete</button>
      <button type="button" onClick={setDeleteTask(false)}>
        Cancel
      </button>
    </>
  );
}

export default DeleteTask;
