import { useSelector, useDispatch } from "react-redux";
import { setBoard } from "../store/board";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";
import boardBtn from "../assets/icon-board.svg";

function SwitchBoard() {
  const dispatch = useDispatch();
  const boards = useSelector((store) => store.board[0].boards);

  const pickBoard = (name) => {
    dispatch(setBoard(name));
  };
  console.log(boards);

  return (
    <AddBoardStyle>
      <div>
        <h2>ALL BOARDS ({boards.length})</h2>
        <div>
          {boards.map((board) => (
            <button
              type="button"
              key={board.name}
              onClick={() => pickBoard(board.name)}
            >
              <img src={boardBtn} alt=" " />
              {board.name}
            </button>
          ))}
          <button type="button">
            <img src={boardBtn} alt=" " /> +Create New Board
          </button>
        </div>
      </div>
      {/* <Dim className="clicked" /> */}
    </AddBoardStyle>
  );
}

export default SwitchBoard;
