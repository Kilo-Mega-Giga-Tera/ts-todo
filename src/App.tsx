import "./App.css";
import Todos from "./components/Todos.tsx";
import TodoData from "./model/TodoData.ts";
import NewTodo from "./components/NewTodo.tsx";
import { useState } from "react";

function App() {
  const [data, setData] = useState<TodoData[]>([]);

  const onAddTodoHandler = (text: string) => {
    const newTodo = new TodoData(text);

    setData((prevState) => [...prevState, newTodo]);
  };

  const onRemoveHandler = (id: string) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <>
      <section className="flex flex-col p-20 gap-2">
        <NewTodo onAddTodo={onAddTodoHandler} />
        <Todos items={data} onRemoveTodo={onRemoveHandler} />
      </section>
    </>
  );
}

export default App;
