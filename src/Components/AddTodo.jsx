import { useState } from "react";
import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { TbPlaylistAdd } from "react-icons/tb";

const AddTodo = ({ onNewItem }) => {
  /*
  const [todoName, setTodoName] = useState();
  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };
  
  const [todoDate, setDueDate] = useState();

  const handleTodoDate = (event) => {
    setDueDate(event.target.value);
  };
*/
  const todoNameElement = useRef("");
  const todoDueDateElement = useRef("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); //prevent date from pushing to server
    const todoName = todoNameElement.current.value;
    const todoDate = todoDueDateElement.current.value;
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
    if (todoName !== "" && todoDate !== "") {
      onNewItem(todoName, todoDate);
      //setDueName(" ");
      //setDueDate(" ");
    }
  };

  return (
    <div className="container text-center">
      <form
        className={`${styles["containerTodo"]}   row`}
        onSubmit={handleAddButtonClicked}
      >
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO here"
            ref={todoNameElement}
            //value={todoName}
            //onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDueDateElement}
            //value={todoDate}
            //onChange={handleTodoDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className={`${styles.button}  btn btn-success`}>
            <TbPlaylistAdd />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
