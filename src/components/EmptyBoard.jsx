import { useState } from "react";
import { Button } from "./styled/HeaderStyled";
import { Empty } from "./styled/BoardStyled";
import EditBoard from "./EditBoard";

function EmptyBoard({ boardName, columns, boardIndex }) {
  document.querySelector(".addCol.empty").style.display = "none";

  const [column, setColumn] = useState(false);

  return (
    <>
      <Empty className="emptyBoard">
        <h2>This board is empty. Create a new column to get started.</h2>
        <Button onClick={() => setColumn(true)}>+ Add New Column</Button>
      </Empty>
      {column && <EditBoard boardName={boardName} />}
    </>
  );
}

export default EmptyBoard;
