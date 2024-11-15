import React, { createContext, useState } from "react";
import TodoData from "../model/TodoData.ts";

type TodosContextObj = {
  items: TodoData[];
  add: (text: string) => void;
  remove: (id: string) => void;
};

export const TodoContext = createContext<TodosContextObj>({
  items: [],
  add: () => {},
  remove: (id: string) => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const [data, setData] = useState<TodoData[]>([]);

  const onAddTodoHandler = (text: string) => {
    const newTodo = new TodoData(text);

    setData((prevState) => [...prevState, newTodo]);
  };

  const onRemoveHandler = (id: string) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: data,
    add: onAddTodoHandler,
    remove: onRemoveHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
