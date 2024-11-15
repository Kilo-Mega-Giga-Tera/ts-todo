import React, { useContext, useRef } from "react";
import { TodoContext } from "../store/todo-context.tsx";

const NewTodo = () => {
  const todoCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.add(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form className="mt-2 flex flex-col gap-2" onSubmit={onSubmitHandler}>
      <label htmlFor={"text"} className="font-bold">
        할 일 입력
      </label>
      <input
        type={"text"}
        id={"text"}
        ref={todoTextInputRef}
        className="bg-slate-200 p-2 rounded"
      />
      <button className="bg-slate-400 p-1 text-slate-50 font-bold hover:bg-slate-500">
        추가
      </button>
    </form>
  );
};

export default NewTodo;
