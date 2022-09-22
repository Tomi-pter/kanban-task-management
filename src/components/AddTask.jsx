import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/board";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";
import close from "../assets/icon-cross.svg";

function AddTask({ setAddTask }) {
  const data = useSelector((store) => store.board[0].boards);
  const boardName = useSelector((store) => store.board[1]);
  const dispatch = useDispatch();
  const taskStatus = useSelector(
    (store) =>
      store.board[0].boards.find((board) => board.name === boardName).columns
  );
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: taskStatus[0].name,
    subtasks: [{ title: "", isCompleted: false }],
  });
  const subsList = [...newTask.subtasks];

  const setTaskTitle = (e) => {
    setNewTask({
      ...newTask,
      title: e.target.value,
    });
  };

  const setDesc = (e) => {
    setNewTask({
      ...newTask,
      description: e.target.value,
    });
  };

  const setSubsName = (e, index) => {
    const { name, value } = e.target;
    subsList[index][name] = value;
    setNewTask({
      ...newTask,
      subtasks: subsList,
    });
  };

  const addSubs = () => {
    setNewTask({
      ...newTask,
      subtasks: [...newTask.subtasks, { name: "", isCompleted: false }],
    });
  };

  const delSubs = (index) => {
    subsList.splice(index, 1);
    setNewTask({
      ...newTask,
      subtasks: subsList,
    });
  };

  const setOption = (e) => {
    setNewTask({ ...newTask, status: e.target.value });
  };

  const addNewTask = () => {
    console.log(newTask);
    dispatch(addTask(newTask));
    setNewTask({
      title: "",
      description: "",
      status: taskStatus[0].name,
      subtasks: [{ title: "", isCompleted: false }],
    });
    setAddTask(false);
  };
  console.log(data);

  const handleDimClicked = () => {
    setAddTask(false);
  };

  return (
    <>
      <AddBoardStyle className="addTask">
        <div>
          <h2>Add New Task</h2>
          <form>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="e.g. Take coffee break"
              value={newTask.title}
              onChange={setTaskTitle}
            />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="7"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
              onChange={setDesc}
              value={newTask.description}
            ></textarea>
            <div className="columns">
              <label htmlFor="subtasks">Subtasks</label>
              {newTask.subtasks.map((col, index) => (
                <div key={index} className="col_input">
                  <input
                    type="text"
                    name="title"
                    id="name"
                    value={col.title}
                    onChange={(e) => setSubsName(e, index)}
                  />
                  <button type="button" onClick={() => delSubs(index)}>
                    <img src={close} alt="close" />
                  </button>
                </div>
              ))}
              <button type="button" className="btn add" onClick={addSubs}>
                + Add New Subtask
              </button>
            </div>
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={newTask.status}
              onChange={setOption}
            >
              {taskStatus.map((task, index) => (
                <option key={task.name} value={task.name}>
                  {task.name}
                </option>
              ))}
            </select>
            <button type="button" className="btn create" onClick={addNewTask}>
              Create Task
            </button>
          </form>
        </div>
      </AddBoardStyle>
      <Dim className="clicked" onClick={handleDimClicked} />
    </>
  );
}

export default AddTask;
