// app/hooks/queries/use-todos-queries.ts
import { fetchTodoById, fetchTodos } from "@/app/services/todo";
import { Todo } from "@/app/types/Todo";
import { QUERY_KEYS } from "@/lib/keys.constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// 목록 조회
export const useTodos = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: QUERY_KEYS.todo.list,

    queryFn: async () => {
      const todos = await fetchTodos();

      todos.forEach((todo) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(todo.id), todo);
      });

      return todos.map((todo) => todo.id);
    },
  });
};

// 단일 조회
export const useTodoById = (id: string, type: "LIST" | "DETAIL") => {
  return useQuery({
    queryKey: QUERY_KEYS.todo.detail(id),
    queryFn: () => fetchTodoById(id),

    enabled: type === "DETAIL",
  });
};
