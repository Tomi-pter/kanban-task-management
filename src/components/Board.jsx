import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BoardStyle } from "./styled/BoardStyled";

function Board() {
  const [board, setBoard] = useState([]);
  const tasks = useSelector((store) => store.board[0]);
  const boardName = useSelector((store) => store.board[1]);

  useEffect(() => {
    setBoard(tasks.boards.find((elem) => elem.name === boardName).columns);
  }, [tasks, boardName]);

  return (
    <BoardStyle>
      {board.map(({ name, tasks }) => {
        return (
          <div className="status" key={name}>
            <h2>
              {name} ({tasks.length})
            </h2>
            {tasks.map(({ title, subtasks }) => {
              return (
                <div className="tasks" key={title}>
                  <h3>{title}</h3>
                  <p>0 of {subtasks.length} subs</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </BoardStyle>
  );
}

export default Board;
