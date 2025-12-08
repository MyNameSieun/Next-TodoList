// app/services/todo.ts

import { Todo } from "../types/Todo";

// 목록 조회
export const fetchTodos = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
  if (!res.ok) throw new Error("Fetch Failed");

  const data: Todo[] = await res.json();
  return data;
};

// 단일 목록 조회
export const fetchTodoById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`);
  if (!res.ok) throw new Error("Fetch Failed");

  const data: Todo = await res.json();
  return data;
};

// 생성
export const createTodo = async (content: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // id를 생략해 자동으로 생성이 되도록 설정
    body: JSON.stringify({
      content: content,
      isDone: false,
      date: new Date(),
    }),
  });

  if (!res.ok) throw new Error("Create Todo Failed");

  const data: Todo = await res.json();
  return data;
};

// 수정 (Partial 타입 사용)
export const updateTodo = async (todo: Partial<Todo> & { id: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/todos/${todo.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    },
  );
  if (!res.ok) throw new Error("Update Todo Failed");

  const data: Todo = await res.json();
  return data;
};

// 삭제
export const deleteTodo = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Delete Todo Failed");
  return id;
};
