import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/welcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (ItemName, itemdueDate) => {
    const newItems = [...todoItems, { name: ItemName, dueDate: itemdueDate }];
    setTodoItems(newItems); //<=If Newer value is independent of older value

    /*setTodoItems((currValue) => {
      const newItems = [...currValue, { name: ItemName, dueDate: itemdueDate }];
      return newItems;
    });*/
    //<=If newer value is dependent to older value(functional update)
  };
  const handleDeleteOnClick = (todoName) => {
    const newAfterDelete = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newAfterDelete);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItems={todoItems} />
        <TodoItems todoItems={todoItems} todoDelete={handleDeleteOnClick} />
      </center>
    </>
  );
}

export default App;
