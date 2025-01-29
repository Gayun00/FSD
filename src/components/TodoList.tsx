import { FC } from "react";
import { useAtom } from "jotai";
import { todosAtom } from "../entities/todo/model/store";
import { TodoItem } from "./TodoItem";

export const TodoList: FC = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
