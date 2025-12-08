import { fetchTodoById, fetchTodos } from "@/app/services/todo";
import { useQuery } from "@tanstack/react-query";

// 목록 조회 훅
export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

// 단일 조회 훅
export const useTodoById = (id: string) => {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => fetchTodoById(id),
  });
};
