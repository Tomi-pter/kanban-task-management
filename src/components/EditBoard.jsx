import { useState } from "react";
import { useDispatch } from "react-redux";
import { editBoard } from "../store/board";
import close from "../assets/icon-cross.svg";
import { AddBoardStyle, Dim } from "./styled/BoardStyled";

function EditBoard({ boardName, columns, setEditBoard, setColumn, setAddCol }) {
  const dispatch = useDispatch();
  const [newBoard, setNewBoard] = useState({
    name: boardName,
    columns: columns ? columns : [{ name: "", tasks: [] }],
    newName: boardName,
  });
  const colList = [...newBoard.columns];
  // const boardIndex = useSelector((store) =>
  //   store.board[0].boards.findIndex((brd) => brd.name === boardName)
  // );
  //   console.log(boardIndex);

  const setBoardName = (e) => {
    setNewBoard({
      ...newBoard,
      name: e.target.value,
      newName: e.target.value,
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
    // console.log(boardIndex);
    if (newBoard.columns.every((col) => col.name.length > 0)) {
      dispatch(editBoard(newBoard));
      // window.location.reload();
      setEditBoard({
        ...editBoard,
        delete: false,
        edit: false,
        options: false,
      });
      document.querySelector(".dim").classList.remove("clicked");
      setNewBoard({ name: boardName, columns: columns });
    }
  };

  const handleDimClicked = () => {
    setColumn && setColumn(false);
    setAddCol && setAddCol(false);
    document.querySelector("header").style.zIndex = 10;
  };

  return (
    <>
      <AddBoardStyle className="edit">
        <div className="container">
          <h2>Edit Board</h2>
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
              Save Changes
            </button>
          </form>
        </div>
      </AddBoardStyle>
      <Dim className="clicked" onClick={handleDimClicked} />
    </>
  );
}

export default EditBoard;
