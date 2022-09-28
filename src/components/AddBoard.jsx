import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard, setBoard } from "../store/board";
import close from "../assets/icon-cross.svg";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";

function AddBoard({ setAddBoard, setBoardChanged }) {
  const dispatch = useDispatch();
  const [newBoard, setNewBoard] = useState({
    name: "",
    columns: [{ name: "", tasks: [] }],
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
      columns: [...newBoard.columns, { name: "", tasks: [] }],
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
    if (newBoard.columns.every((col) => col.name.length > 0)) {
      dispatch(addBoard(newBoard));
      dispatch(setBoard(newBoard.name));
      setNewBoard({ name: "", columns: [{ name: "", tasks: [] }] });
      setAddBoard(false);
      setBoardChanged(false);
      document
        .querySelectorAll(".switch")
        .forEach((swi) => (swi.style.zIndex = 1));
    }
    // window.location.reload();
  };

  const handleDimClicked = () => {
    setAddBoard(false);
    document
      .querySelectorAll(".switch")
      .forEach((swi) => (swi.style.zIndex = 1));
  };

  return (
    <>
      <AddBoardStyle className="edit aNB">
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
              required
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
                    required
                  />
                  <button type="button" onClick={() => delColumn(index)}>
                    <img src={close} alt="close" />
                  </button>
                </div>
              ))}
              <button type="button" className="btn add" onClick={addColumn}>
                + Add New Column
              </button>
            </div>
            <button type="submit" className="btn create" onClick={addNewBoard}>
              Create New Board
            </button>
          </form>
        </div>
      </AddBoardStyle>
      <Dim className="clicked" onClick={handleDimClicked} />
    </>
  );
}

export default AddBoard;
