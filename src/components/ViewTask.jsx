import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSub } from "../store/board";

function ViewTask({
  title,
  description,
  subtasks,
  board,
  status,
  setViewTask,
}) {
  const columns = useSelector((store) =>
    store.board[0].boards
      .find((board) => board.name === store.board[1])
      .columns.find((col) => col.name === status || col.name === board.name)
  );

  // console.log(subtasks);
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState({
    title: title,
    description: description,
    status: status,
    subtasks: subtasks,
    subTitle: {},
  });

  // const getIsCompleted = (sub) => {
  //   let isCompleted = sub.isCompleted;
  //   return isCompleted;
  // };

  const [checkActive, setCheckActive] = useState(false);
  const [subList, setSubList] = useState([]);
  // const subsList = [...newTask.subtasks];

  useEffect(() => {
    setSubList(columns.tasks.find((task) => task.title === title)?.subtasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns.tasks]);

  // const handleSubCheck = (title, isCompleted) => {
  //   setNewTask({
  //     ...newTask,
  //     subTitle: {
  //       ...newTask.subTitle,
  //       title: title,
  //       isCompleted: isCompleted,
  //     },
  //   });
  //   console.log(newTask);
  //   setCheckActive(true);
  //   // setViewTask(false);
  //   // setViewTask(true);
  // };

  if (checkActive) {
    dispatch(editSub(newTask));
    setCheckActive(false);
  }
  // setNewTask({
  //   ...newTask,
  //   subTitle: {
  //     ...newTask.subTitle,
  //     title: "",
  //     isCompleted: false,
  //   },
  // });

  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <label htmlFor="">
          Subtasks ({subList.filter((subs) => subs.isCompleted).length} of{" "}
          {subList.length})
        </label>
        <div className="subs">
          {subList.map((subs, index) => (
            <div className={subs.isCompleted ? "completed" : ""} key={index}>
              <input
                type="checkbox"
                name={subs.title}
                id={subs.title}
                onChange={() =>
                  setNewTask(
                    {
                      ...newTask,
                      subTitle: {
                        ...newTask.subTitle,
                        title: subs.title,
                        isCompleted: !subs.isCompleted,
                      },
                    },
                    setCheckActive(true)
                  )
                }
                defaultChecked={subs.isCompleted ? true : false}
                // checked={subs.isCompleted ? true : false}
              />
              <label htmlFor={subs.title}>{subs.title}</label>
            </div>
          ))}
        </div>
        <label htmlFor="status">Current Status</label>
        <select name="status" id="status" value={status} readOnly>
          {board.map((brd) => (
            <option value={brd.name} key={brd.name}>
              {brd.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default ViewTask;
