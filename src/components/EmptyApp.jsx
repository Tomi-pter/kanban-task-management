import { Button } from "./styled/HeaderStyled";
import { useState, useEffect } from "react";
import AddBoard from "./AddBoard";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setDisabled } from "../store/board";

const EmptyAppStyle = styled.section`
  display: grid;
  place-content: center;
  place-items: center;
  height: 100vh;
  transition: all 350ms;

  p {
    color: var(--main-purple);
  }

  Button {
    color: white;
  }

  &.sidebar {
    margin-left: 300px;
  }
`;

function EmptyApp() {
  const [newBoard, setNewBoard] = useState(false);
  const dispatch = useDispatch();
  //   const disabled = useSelector((store) => store.board[4]);

  useEffect(() => {
    // document.querySelector("#addNewTask").setAttribute("disabled", "");
    // document.querySelector(".opts").setAttribute("disabled", "");
    dispatch(setDisabled(true));
  });

  return (
    <EmptyAppStyle className="emptyApp">
      <p>No boards currently. Create a new board.</p>
      <Button onClick={() => setNewBoard(true)}>+ Add New Board</Button>
      {newBoard && <AddBoard setAddBoard={setNewBoard} />}
    </EmptyAppStyle>
  );
}

export default EmptyApp;
