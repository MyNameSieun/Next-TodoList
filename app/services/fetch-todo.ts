import { Todo } from "../types/Todo";

// 다중
export const fetchTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  if (!res.ok) throw new Error("Fetch Failed");

  const data: Todo[] = await res.json();
  return data;
};

// 단일
export const fetchTodoById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`);
  if (!res.ok) throw new Error("Fetch Failed");

  const data: Todo[] = await res.json();
  return data;
};
