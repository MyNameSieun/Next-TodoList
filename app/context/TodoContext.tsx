"use client";
import { createContext, useContext } from "react";
import { Todo } from "../types/Todo";

interface TodoDispathContextValue {
  onCreate: (content: string) => void;
  onDelete: (targetId: string) => void;
  onToggle: (targetId: string) => void;
}

export const TodoStateContext = createContext<Todo[] | undefined>(undefined);
export const TodoDispathContext = createContext<
  TodoDispathContextValue | undefined
>(undefined);

export const useTodoState = () => {
  const ctx = useContext(TodoStateContext);
  if (!ctx) throw new Error("state context 에러");
  return ctx;
};

export const useTodoDispath = () => {
  const ctx = useContext(TodoDispathContext);
  if (!ctx) throw new Error("dispath context 에러");
  return ctx;
};
