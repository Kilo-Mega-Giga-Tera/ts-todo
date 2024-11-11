import TodoItems from "./TodoItems.tsx";
import TodoData from "../model/TodoData.ts";

type TodosProps = {
  items: TodoData[];
  onRemoveTodo: (id: string) => void;
};

const Todos = ({ items, onRemoveTodo }: TodosProps) => {
  return (
    <ul className="flex flex-col gap-2 cursor-pointer">
      {items.map((item) => (
        <TodoItems key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

export default Todos;
