import styles from "./AppName.module.css";
import { LuListTodo } from "react-icons/lu";
function AppName() {
  return (
    <h1 className={styles.heading}>
      TODO APP
      <LuListTodo />
    </h1>
  );
}

export default AppName;
