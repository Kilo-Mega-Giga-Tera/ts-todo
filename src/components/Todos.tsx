import TodoItems from "./TodoItems.tsx";
import { useContext } from "react";
import { TodoContext } from "../store/todo-context.tsx";

const Todos = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className="flex flex-col gap-2 cursor-pointer">
      {todoCtx.items.map((item) => (
        <TodoItems
          key={item.id}
          item={item}
          onClick={() => todoCtx.remove(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
