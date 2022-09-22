// import { useState } from "react";
import { useSelector } from "react-redux";
// import AddBoard from "./AddBoard";
// import AddTask from "./AddTask";
import Board from "./Board";
import EmptyApp from "./EmptyApp";
// import EmptyBoard from "./EmptyBoard";
import { MainStyle } from "./styled/BoardStyled";
// import SwitchBoard from "./SwitchBoard";

function Main() {
  //   const [empty, setEmpty] = useState(true);

  const boards = useSelector((store) => store.board);
  console.log(boards);

  // const obj = {};

  // if (
  //   obj &&
  //   Object.keys(obj).length === 0 &&
  //   Object.getPrototypeOf(obj) === Object.prototype
  // ) {
  //   console.log(true, "its empty");
  // }

  return (
    <>
      <MainStyle className="boardContainer">
        {/* <EmptyBoard /> */}
        {boards[0].boards.length === 0 ? <EmptyApp /> : <Board />}
        {/* <AddBoard /> */}
        {/* <AddTask /> */}
        {/* <SwitchBoard /> */}
      </MainStyle>
    </>
  );
}

export default Main;
