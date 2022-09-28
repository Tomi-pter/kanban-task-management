import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logoMobile from "../assets/logo-mobile.svg";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import options from "../assets/icon-vertical-ellipsis.svg";
import add from "../assets/icon-add-task-mobile.svg";
import down from "../assets/icon-chevron-down.svg";
import up from "../assets/icon-chevron-up.svg";
import hide from "../assets/icon-hide-sidebar.svg";
import show from "../assets/icon-show-sidebar.svg";
import { Button, HeaderStyle } from "./styled/HeaderStyled";
import EditBoard from "./EditBoard";
import { deleteBoard, setSideBar } from "../store/board";
import SwitchBoard from "./SwitchBoard";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";
import AddTask from "./AddTask";

function Header() {
  const dispatch = useDispatch();
  const boardName = useSelector((store) => store.board[1]);
  const boardCols = useSelector(
    (store) =>
      store.board[0].boards.find((brd) => brd.name === boardName)?.columns
  );
  const boardIndex = useSelector((store) =>
    store.board[0].boards.findIndex((brd) => brd.name === boardName)
  );
  const sideBar = useSelector((store) => store.board[2]);
  const disabled = useSelector((store) => store.board[4]);
  // console.log(boardIndex);

  const [boardChanged, setBoardChanged] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [editBoard, setEditBoard] = useState({
    options: false,
    edit: false,
    delete: false,
  });
  // const [sidebar, setSidebar] = useState(sideBar)

  const handleBtnClick = () => {
    setEditBoard({
      ...editBoard,
      options: true,
    });
    document.querySelector(".dim").classList.add("clicked");
  };

  const editClicked = () => {
    setEditBoard({
      ...editBoard,
      options: false,
      edit: true,
    });
  };

  const delClicked = () => {
    setEditBoard({
      ...editBoard,
      delete: true,
      options: false,
      edit: false,
    });
  };

  const cancelClicked = () => {
    setEditBoard({
      ...editBoard,
      delete: false,
    });
  };

  const handleBoardDelete = (action) => {
    dispatch(deleteBoard(action));
    window.location.reload();
  };

  const handleBoardChange = () => {
    boardChanged ? setBoardChanged(false) : setBoardChanged(true);
  };

  const handleAddTask = () => {
    setAddTask(true);
  };

  const handleDimClicked = () => {
    setEditBoard({
      ...editBoard,
      delete: false,
      edit: false,
      options: false,
    });
    document.querySelector(".dim").classList.remove("clicked");
  };

  useEffect(() => {
    document?.querySelector(".mainBoard")?.classList.add("sideBar");
  }, []);

  const handleSidebar = () => {
    dispatch(setSideBar(!sideBar));
  };

  useEffect(() => {
    sideBar && document.querySelector(".emptyBoard")?.classList.add("sidebar");
  });

  useEffect(() => {
    if (sideBar) {
      document.querySelector(".mainBoard")?.classList.add("sideBar");
      document.querySelector(".emptyBoard")?.classList.add("sidebar");
      document.querySelector(".emptyApp")?.classList.add("sidebar");
    } else {
      document.querySelector(".mainBoard")?.classList.remove("sideBar");
      document.querySelector(".emptyBoard")?.classList.remove("sidebar");
      document.querySelector(".emptyApp")?.classList.remove("sidebar");
    }
  }, [sideBar]);

  const currentBoard = useSelector((store) => store.board[0].boards);
  const [optDisabled, setOptDisabled] = useState(false);

  useEffect(() => {
    currentBoard.length === 0 && setOptDisabled(true);
    currentBoard.length > 0 && setOptDisabled(false);
  }, [currentBoard.length]);

  return (
    <>
      <HeaderStyle className="head">
        <div className="desktop">
          <aside className={`desk ${sideBar ? "active" : ""}`}>
            <div className="sideLogo">
              <img src={logoLight} alt="logo" className="logo desktop dark" />
              <img src={logoDark} alt="logo" className="logo desktop light" />
            </div>
            <SwitchBoard sidebar={sideBar} />
            <div className="hide" onClick={handleSidebar}>
              <button>
                <img src={hide} alt="hide sidebar" />
                <span>Hide Sidebar</span>
              </button>
            </div>
          </aside>
          <div className={`show ${sideBar ? "" : "active"}`}>
            <button onClick={handleSidebar}>
              <img src={show} alt="show sidebar" />
            </button>
          </div>
        </div>
        <div className="container">
          <div className={`logoNav ${sideBar ? "active" : ""}`}>
            <div className="logoContainer">
              <img src={logoMobile} alt="logo" className="logo mobile" />
              <img src={logoLight} alt="logo" className="logo desktop dark" />
              <img src={logoDark} alt="logo" className="logo desktop light" />
            </div>
            <nav>
              <h1>{boardName}</h1>
              <button onClick={handleBoardChange}>
                <img src={boardChanged ? up : down} alt="" />
              </button>
              {boardChanged && (
                <SwitchBoard setBoardChanged={setBoardChanged} />
              )}
            </nav>
          </div>
          <div className="add">
            <Button onClick={handleAddTask} id="addNewTask" disabled={disabled}>
              <img src={add} alt="add task" />{" "}
              <span className="desktop">Add New Task</span>
            </Button>
            <button
              type="button"
              onClick={handleBtnClick}
              disabled={optDisabled}
            >
              <img src={options} alt="options" />
            </button>
            {editBoard.options && (
              <>
                <AddBoardStyle className="viewOpt header">
                  <button type="button" onClick={editClicked}>
                    Edit Board
                  </button>
                  <button type="button" onClick={delClicked}>
                    Delete Board
                  </button>
                </AddBoardStyle>
              </>
            )}
            {editBoard.edit && (
              <EditBoard
                boardName={boardName}
                columns={boardCols}
                boardIndex={boardIndex}
                setEditBoard={setEditBoard}
              />
            )}
            {editBoard.delete && (
              <>
                <AddBoardStyle className="delPop">
                  <h1>Delete this board?</h1>
                  <p>
                    Are you sure you want to delete the '{boardName}' board?
                    This action will remove all columns and tasks and cannot be
                    reversed.
                  </p>
                  <div className="btns">
                    <button
                      type="button"
                      onClick={() => handleBoardDelete({ name: boardName })}
                    >
                      Delete
                    </button>
                    <button type="button" onClick={cancelClicked}>
                      Cancel
                    </button>
                  </div>
                </AddBoardStyle>
                {/* <Dim className="clicked" /> */}
              </>
            )}
          </div>
        </div>
        <Dim className="dim" onClick={handleDimClicked} />
        {addTask && <AddTask setAddTask={setAddTask} />}
      </HeaderStyle>
    </>
  );
}

export default Header;
