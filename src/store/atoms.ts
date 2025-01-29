import { atom } from "jotai";
import { Todo } from "../types/todo";

export const todosAtom = atom<Todo[]>([]);
