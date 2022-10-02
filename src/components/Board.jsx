import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ViewTask from "./ViewTask";
import { AddBoardStyle, BoardStyle, Dim } from "./styled/BoardStyled";
import optionBtn from "../assets/icon-vertical-ellipsis.svg";
import EditTask from "./EditTask";
import { deleteTask, setDisabled, setSideBar } from "../store/board";
import EditBoard from "./EditBoard";
import EmptyBoard from "./EmptyBoard";

function Board() {
  const dispatch = useDispatch();
  const [board, setBoard] = useState([]);
  const [addCol, setAddCol] = useState(false);
  const [viewTask, setViewTask] = useState(false);
  const [editTask, setEditTask] = useState({
    options: false,
    edit: false,
    delete: false,
  });
  const [taskClicked, setTaskClicked] = useState({
    boardIndex: "",
    taskIndex: "",
  });
  // const [editBoard, setEditBoard] = useState(false);

  const stateBoard = useSelector((store) => store.board[0]);
  const boardName = useSelector((store) => store.board[1]);
  const boardCols = useSelector(
    (store) =>
      store.board[0].boards.find((brd) => brd.name === boardName)?.columns
  );
  const boardIndex = useSelector((store) =>
    store.board[0].boards.findIndex((brd) => brd.name === boardName)
  );
  // const sideBar = useSelector((store) => store.board[2]);

  useEffect(() => {
    setBoard(
      stateBoard.boards.find((elem) => elem.name === boardName)?.columns
    );
    console.log(board);
  }, [board, boardName, stateBoard.boards]);

  const colors = [
    "#49c4e5",
    "#8471f2",
    "#67e2ae",
    "#a958bb",
    "#a28d54",
    "#df1f58",
  ];
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
      circle.style.backgroundColor = colors[index];

      if (!colors[index]) {
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        circle.style.backgroundColor = colors[index];
      }
    });

    // console.log(Math.floor(Math.random() * 16777215).toString(16));
  });

  const handleTaskClick = (tasks, title, name) => {
    setTaskClicked({
      ...taskClicked,
      boardIndex: board.findIndex((brd) => brd.name === name),
      taskIndex: tasks.findIndex((task) => task.title === title),
    });
    setViewTask(true);
    document.querySelector("header").style.zIndex = -1;
    dispatch(setSideBar(false));
    console.log(viewTask);
  };

  const handleOptionsClick = () => {
    setEditTask({
      ...editTask,
      options: true,
    });
    console.log(viewTask);
  };

  const editClicked = (tasks) => {
    setEditTask({
      ...editTask,
      options: false,
      edit: true,
    });
    setViewTask(false);
    console.log(editTask);
    console.log(tasks[taskClicked.taskIndex]);
  };

  const deleteClicked = () => {
    setEditTask({
      ...editTask,
      options: false,
      delete: true,
    });
    setViewTask(false);
    document.querySelector(".view").style.display = "none";
  };

  const cancelClicked = () => {
    setEditTask({
      ...editTask,
      delete: false,
    });
    document.querySelector(".view").style.display = "flex";
  };

  const handleTaskDelete = (action) => {
    dispatch(deleteTask(action));
    window.location.reload();
    // setTaskClicked({
    //   ...taskClicked,
    //   boardIndex: "",
    //   taskIndex: "",
    // });
    // setEditTask({
    //   ...editTask,
    //   options: false,
    //   edit: false,
    //   delete: false,
    // });
    // setViewTask(false);
  };

  const handleDimClicked = () => {
    // window.location.reload();
    setViewTask(false);
    setTaskClicked({
      ...taskClicked,
      boardIndex: "",
      taskIndex: "",
    });
    setEditTask({
      ...editTask,
      options: false,
      edit: false,
      delete: false,
    });
    document.querySelector("header").style.zIndex = 10;
  };

  const handleAddCol = () => {
    setAddCol(true);
    document.querySelector("header").style.zIndex = -1;
    // setEditBoard(!editBoard);
  };

  useEffect(() => {
    board.length > 0 && dispatch(setDisabled(false));
    board.length === 0 && dispatch(setDisabled(true));
  }, [board.length, dispatch]);

  return (
    <>
      <BoardStyle className="mainBoard">
        {board.length > 0 ? (
          board.map(({ name, tasks }) => (
            <li className="status" key={name}>
              <h2>
                <span className="circle"></span> {name} ({tasks.length})
              </h2>
              <ul className={`status ${tasks?.length === 0 ? "empty" : ""}`}>
                {tasks?.map(
                  ({ title, subtasks, description, status }, index) => {
                    return (
                      <li
                        className="tasks"
                        key={title}
                        onClick={() => handleTaskClick(tasks, title, name)}
                        tabIndex={0}
                        onKeyUp={(e) => {
                          e.key === "Enter" &&
                            handleTaskClick(tasks, title, name);
                        }}
                      >
                        <h3>{title}</h3>
                        <p>
                          {subtasks.filter((subs) => subs.isCompleted).length}{" "}
                          of {subtasks.length} subtasks
                        </p>
                        {viewTask &&
                          board[taskClicked.boardIndex].name === name &&
                          tasks[taskClicked.taskIndex].title === title && (
                            <>
                              <AddBoardStyle className="view">
                                <ViewTask
                                  title={title}
                                  description={description}
                                  subtasks={subtasks}
                                  board={board}
                                  status={name}
                                  viewTask={viewTask}
                                  setViewTask={setViewTask}
                                  handleDimClicked={handleDimClicked}
                                />
                                <button
                                  type="button"
                                  onClick={handleOptionsClick}
                                >
                                  <img src={optionBtn} alt="options" />
                                </button>
                                {editTask.options &&
                                  board[taskClicked.boardIndex].name === name &&
                                  tasks[taskClicked.taskIndex].title ===
                                    title && (
                                    <AddBoardStyle className="viewOpt">
                                      <button
                                        type="button"
                                        onClick={() => editClicked(tasks)}
                                      >
                                        Edit Task
                                      </button>
                                      <button
                                        type="button"
                                        onClick={deleteClicked}
                                      >
                                        Delete Task
                                      </button>
                                    </AddBoardStyle>
                                  )}
                              </AddBoardStyle>
                            </>
                          )}{" "}
                        {editTask.delete &&
                          board[taskClicked.boardIndex].name === name &&
                          tasks[taskClicked.taskIndex].title === title && (
                            <>
                              <AddBoardStyle className="delPop">
                                <h1>Delete this task?</h1>
                                <p>
                                  Are you sure you want to delete the '{title}'
                                  task and its subtasks? This action cannot be
                                  reversed.
                                </p>
                                <div className="btns">
                                  <button
                                    onClick={() =>
                                      handleTaskDelete({
                                        title,
                                        status,
                                        colName: name,
                                      })
                                    }
                                  >
                                    Delete
                                  </button>
                                  <button type="button" onClick={cancelClicked}>
                                    Cancel
                                  </button>
                                </div>
                              </AddBoardStyle>
                            </>
                          )}
                        {editTask.edit &&
                          board[taskClicked.boardIndex].name === name &&
                          tasks[taskClicked.taskIndex].title === title && (
                            <>
                              <EditTask
                                title={title}
                                description={description}
                                subtasks={subtasks}
                                status={name}
                                board={board}
                                index={taskClicked.taskIndex}
                                boardIndex={taskClicked.boardIndex}
                                name={name}
                                setEditTask={setEditTask}
                                setViewTask={setViewTask}
                                setTaskClicked={setTaskClicked}
                                handleDimClicked={handleDimClicked}
                              />
                            </>
                          )}
                      </li>
                    );
                  }
                )}
              </ul>
            </li>
          ))
        ) : (
          <EmptyBoard boardName={boardName} />
        )}
        {board.length > 0 && (
          <>
            <div className="addCol status empty">
              <button onClick={handleAddCol}>+ New Column</button>
            </div>
            {addCol && (
              <EditBoard
                boardName={boardName}
                columns={boardCols}
                boardIndex={boardIndex}
                setAddCol={setAddCol}
              />
            )}
          </>
        )}
        {(viewTask || editTask.edit) && (
          <Dim className="clicked" onClick={handleDimClicked} />
        )}
      </BoardStyle>
    </>
  );
}

export default Board;
