// app/hooks/queries/use-todos-queries.ts
import { fetchTodoById, fetchTodos } from "@/app/services/todo";
import { QUERY_KEYS } from "@/lib/keys.constant";
import { useQuery } from "@tanstack/react-query";

// 목록 조회
export const useTodos = () => {
  return useQuery({
    queryKey: QUERY_KEYS.todo.list, // ["todos", "list"]
    queryFn: fetchTodos,
  });
};

// 단일 조회
export const useTodoById = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.todo.detail(id), // ["todos", "detail", id]
    queryFn: () => fetchTodoById(id),
  });
};
