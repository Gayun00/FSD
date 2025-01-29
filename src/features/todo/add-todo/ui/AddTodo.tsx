import { FC, useState } from "react";
import { useAtom } from "jotai";
import { todosAtom } from "../../../../entities/todo/model/store";

export const AddTodo: FC = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useAtom(todosAtom);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};
