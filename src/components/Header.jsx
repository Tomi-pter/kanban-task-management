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
import { deleteBoard } from "../store/board";
import SwitchBoard from "./SwitchBoard";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";
import AddTask from "./AddTask";

function Header() {
  const dispatch = useDispatch();
  const boardName = useSelector((store) => store.board[1]);
  const boardCols = useSelector(
    (store) =>
      store.board[0].boards.find((brd) => brd.name === boardName).columns
  );
  const boardIndex = useSelector((store) =>
    store.board[0].boards.findIndex((brd) => brd.name === boardName)
  );
  // console.log(boardIndex);

  const [boardChanged, setBoardChanged] = useState(false);
  const [addTask, setAddTask] = useState(false);
  const [editBoard, setEditBoard] = useState({
    options: false,
    edit: false,
    delete: false,
  });
  const [sidebar, setSidebar] = useState(true);

  const handleBtnClick = () => {
    setEditBoard({
      ...editBoard,
      options: true,
    });
  };

  const editClicked = () => {
    setEditBoard({
      ...editBoard,
      edit: true,
    });
  };

  const delClicked = () => {
    setEditBoard({
      ...editBoard,
      delete: true,
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
    setBoardChanged(true);
  };

  const handleAddTask = () => {
    setAddTask(true);
  };

  useEffect(() => {
    document?.querySelector(".mainBoard")?.classList.add("sideBar");
  }, []);

  const handleSidebar = () => {
    setSidebar(!sidebar);
    sidebar
      ? document.querySelector(".mainBoard").classList.remove("sideBar")
      : document.querySelector(".mainBoard").classList.add("sideBar");
  };

  return (
    <>
      <HeaderStyle>
        <div className="desktop">
          <aside className={`desk ${sidebar ? "active" : ""}`}>
            <div className="sideLogo">
              <img src={logoLight} alt="logo" className="logo desktop dark" />
              <img src={logoDark} alt="logo" className="logo desktop light" />
            </div>
            <SwitchBoard sidebar={sidebar} />
            <div className="hide">
              <button onClick={handleSidebar}>
                <img src={hide} alt="hide sidebar" />
                <span>Hide Sidebar</span>
              </button>
            </div>
          </aside>
          <div className={`show ${sidebar ? "" : "active"}`}>
            <button onClick={handleSidebar}>
              <img src={show} alt="show sidebar" />
            </button>
          </div>
        </div>
        <div className="container">
          <div className={`logoNav ${sidebar ? "active" : ""}`}>
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
              {boardChanged && <SwitchBoard />}
            </nav>
          </div>
          <div className="add">
            <Button onClick={handleAddTask}>
              <img src={add} alt="add task" />{" "}
              <span className="desktop">Add New Task</span>
            </Button>
            <button type="button" onClick={handleBtnClick}>
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
                <Dim className="clicked" />
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
                  <button
                    type="button"
                    onClick={() => handleBoardDelete({ name: boardName })}
                  >
                    Delete
                  </button>
                  <button type="button" onClick={cancelClicked}>
                    Cancel
                  </button>
                </AddBoardStyle>
                <Dim className="clicked" />
              </>
            )}
          </div>
        </div>
      </HeaderStyle>
      {addTask && <AddTask />}
    </>
  );
}

export default Header;
