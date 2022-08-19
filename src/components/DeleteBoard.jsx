function DeleteBoard({ boardName }) {
  return (
    <>
      <h1>Delete this board?</h1>
      <p>
        Are you sure you want to delete the '{boardName}' board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <button type="button">Delete</button>
      <button type="button">Cancel</button>
    </>
  );
}

export default DeleteBoard;
