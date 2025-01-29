import { FC } from "react";
import "./App.css";
import { AddTodo } from "./features/todo/add-todo/ui/AddTodo";
import { TodoList } from "./widgets/todo-list/ui/TodoList";

export const App: FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo 앱</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
