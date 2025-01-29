import { FC } from "react";
import { Todo } from "../model/types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
};
