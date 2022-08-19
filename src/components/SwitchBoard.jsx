import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoard } from "../store/board";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";
import boardBtn from "../assets/icon-board.svg";
import AddBoard from "./AddBoard";

function SwitchBoard({ sidebar }) {
  const dispatch = useDispatch();
  const boards = useSelector((store) => store.board[0].boards);
  const activeBoard = useSelector(
    (store) =>
      store.board[0].boards.find((brd) => brd.name === store.board[1]).name
  );

  const pickBoard = (name) => {
    dispatch(setBoard(name));
    window.location.reload();
  };
  console.log(boards);

  const [addBoard, setAddBoard] = useState(false);

  const handleAddBoardClicked = () => {
    setAddBoard(true);
    document.querySelector(".switch").style.display = "none";
  };

  return (
    <>
      <AddBoardStyle className={`switch ${sidebar ? "sideBar" : "hideBar"}`}>
        <div>
          <h2>ALL BOARDS ({boards.length})</h2>
          <div>
            {boards.map((board) => (
              <button
                type="button"
                key={board.name}
                onClick={() => pickBoard(board.name)}
                className={board.name === activeBoard ? "active" : ""}
              >
                <img src={boardBtn} alt=" " />
                <span>{board.name}</span>
              </button>
            ))}
            <button type="button" onClick={handleAddBoardClicked}>
              <img src={boardBtn} alt=" " />
              <span>+ Create New Board</span>
            </button>
          </div>
        </div>
      </AddBoardStyle>
      {addBoard && <AddBoard />}
      <Dim className="clicked switch" />
    </>
  );
}

export default SwitchBoard;
