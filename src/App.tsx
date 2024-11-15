import "./App.css";
import Todos from "./components/Todos.tsx";
import NewTodo from "./components/NewTodo.tsx";
import TodoContextProvider from "./store/todo-context.tsx";

function App() {
  return (
    <TodoContextProvider>
      <section className="flex flex-col p-20 gap-2">
        <NewTodo />
        <Todos />
      </section>
    </TodoContextProvider>
  );
}

export default App;
