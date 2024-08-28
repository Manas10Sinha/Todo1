import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, todoDelete }) => {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item}
          TodoName={item.name}
          TodoDate={item.dueDate}
          todoDelete={todoDelete}
        />
      ))}
    </div>
  );
};

export default TodoItems;
