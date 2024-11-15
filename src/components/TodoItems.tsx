import TodoData from "../model/TodoData.ts";

type TodoProps = {
  item: TodoData;
  onClick: () => void;
};

const TodoItems = (props: TodoProps) => {
  return (
    <li
      className="bg-slate-200 p-3 rounded hover:bg-slate-300"
      onClick={props.onClick}
    >
      {props.item.title}
    </li>
  );
};

export default TodoItems;
