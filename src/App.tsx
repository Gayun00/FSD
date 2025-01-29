import { FC } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export const App: FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo 앱</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
