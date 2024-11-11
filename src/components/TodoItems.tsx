import TodoData from "../model/TodoData.ts";

type TodoProps = {
  item: TodoData;
  onRemoveTodo: (id: string) => void;
};

const TodoItems = (props: TodoProps) => {
  return (
    <li
      onClick={() => props.onRemoveTodo(props.item.id)}
      className="bg-slate-200 p-3 rounded hover:bg-slate-300"
    >
      {props.item.title}
    </li>
  );
};

export default TodoItems;
