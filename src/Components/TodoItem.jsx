import styles from "./TodoItem.module.css";
import { MdDeleteSweep } from "react-icons/md";
const TodoItem = ({ TodoName, TodoDate, todoDelete }) => {
  return (
    <div className={styles.my_container}>
      <div className="row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles.button}   btn btn-danger`}
            onClick={() => todoDelete(TodoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
