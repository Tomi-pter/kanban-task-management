import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../store/board";
import close from "../assets/icon-cross.svg";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";

function AddBoard() {
  const dispatch = useDispatch();
  const [newBoard, setNewBoard] = useState({
    name: "",
    columns: [{ name: "" }],
  });
  const colList = [...newBoard.columns];

  const setBoardName = (e) => {
    setNewBoard({
      ...newBoard,
      name: e.target.value,
    });
  };

  const setColName = (e, index) => {
    const { name, value } = e.target;
    colList[index][name] = value;
    setNewBoard({
      ...newBoard,
      columns: colList,
    });
  };

  const addColumn = () => {
    setNewBoard({
      ...newBoard,
      columns: [...newBoard.columns, { name: "" }],
    });
  };

  const delColumn = (index) => {
    colList.splice(index, 1);
    setNewBoard({
      ...newBoard,
      columns: colList,
    });
  };

  const addNewBoard = () => {
    dispatch(addBoard(newBoard));
    setNewBoard({ name: "", columns: [{ name: "" }] });
  };

  return (
    <AddBoardStyle>
      <div className="container">
        <h2>Add New Board</h2>
        <form>
          <label htmlFor="board_name">Board Name</label>
          <input
            type="text"
            name="board_name"
            id="board_name"
            placeholder="e.g. Web Design"
            value={newBoard.name}
            onChange={setBoardName}
          />
          <div className="columns">
            <label htmlFor="">Board Columns</label>
            {newBoard.columns.map((col, index) => (
              <div key={index} className="col_input">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={col.name}
                  onChange={(e) => setColName(e, index)}
                />
                <button type="button" onClick={() => delColumn(index)}>
                  <img src={close} alt="close" />
                </button>
              </div>
            ))}
            <button type="button" onClick={addColumn}>
              + Add New Column
            </button>
          </div>
          <button type="button" onClick={addNewBoard}>
            Create New Board
          </button>
        </form>
      </div>
      <Dim className="clicked" />
    </AddBoardStyle>
  );
}

export default AddBoard;
