import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, setBrightness } from "../store/board";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";
import boardBtn from "../assets/icon-board.svg";
import AddBoard from "./AddBoard";
import sun from "../../src/assets/icon-light-theme.svg";
import moon from "../../src/assets/icon-dark-theme.svg";

function SwitchBoard({ sidebar, setBoardChanged }) {
  const dispatch = useDispatch();
  const boards = useSelector((store) => store.board[0].boards);
  const activeBoard = useSelector(
    (store) =>
      store.board[0].boards.find((brd) => brd.name === store.board[1])?.name
  );
  const dark = useSelector((store) => store.board[3]);

  const pickBoard = (name) => {
    dispatch(setBoard(name));
    window.location.reload();
  };
  console.log(boards);

  const [addBoard, setAddBoard] = useState(false);
  const [darkMode, setDarkMode] = useState(dark);
  const [checked, setChecked] = useState("");

  const handleAddBoardClicked = () => {
    setAddBoard(true);
    document.querySelector(".switch").style.display = "none";
  };

  const handleToggle = () => {
    !darkMode ? setChecked("checked") : setChecked("");
    setDarkMode(!darkMode);
    document.querySelector(".boardContainer")?.classList.toggle("dark");
    document.querySelector(".view")?.classList.toggle("dark");
    document.querySelector(".desktop")?.classList.toggle("dark");
    document.querySelector(".head")?.classList.toggle("dark");
    dispatch(setBrightness(!darkMode));
  };

  useEffect(() => {
    if (dark) {
      document.querySelector(".boardContainer")?.classList.add("dark");
      document.querySelector(".view")?.classList.add("dark");
      document.querySelector(".desktop")?.classList.add("dark");
      document.querySelector(".head")?.classList.add("dark");
      setChecked("checked");
    }
    !dark && setChecked("");
  }, [dark]);

  const handleDimClicked = () => {
    setBoardChanged(false);
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

          <div className="darkToggle">
            <label htmlFor="darkmode" onClick={handleToggle}>
              <img src={sun} alt="light mode" />
            </label>
            <div className="toggleCheck">
              <input
                type="checkbox"
                name="darkmode"
                id="darkmode"
                className={checked}
                onClick={handleToggle}
                disabled
              />
              <span className="slider" onClick={handleToggle}></span>
            </div>
            <label htmlFor="darkmode" onClick={handleToggle}>
              <img src={moon} alt="dark mode" />
            </label>
          </div>
        </div>
      </AddBoardStyle>
      {addBoard && <AddBoard />}
      <Dim className="clicked switchBrd" onClick={handleDimClicked} />
    </>
  );
}

export default SwitchBoard;
