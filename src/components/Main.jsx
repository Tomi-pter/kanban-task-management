import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddBoard from "./AddBoard";
import AddTask from "./AddTask";
import Board from "./Board";
import EmptyBoard from "./EmptyBoard";
import { MainStyle } from "./styled/BoardStyled";
import SwitchBoard from "./SwitchBoard";

function Main() {
  //   const [empty, setEmpty] = useState(true);

  const boards = useSelector((store) => store.board);
  console.log(boards);

  return (
    <>
      <MainStyle className="boardContainer">
        {/* <EmptyBoard /> */}
        <Board />
        {/* <AddBoard /> */}
        {/* <AddTask /> */}
        {/* <SwitchBoard /> */}
      </MainStyle>
    </>
  );
}

export default Main;
