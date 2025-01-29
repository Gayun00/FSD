import { atom } from "jotai";
import { Todo } from "../types/todo";

export const todosAtom = atom<Todo[]>([]);
export const filterAtom = atom<"all" | "active" | "completed">("all");
