// app/hooks/use-todo-mutations.ts

import { createTodo, deleteTodo, updateTodo } from "@/app/services/todo";
import { Todo } from "@/app/types/Todo";
import { QUERY_KEYS } from "@/lib/keys.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// 추가
export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo]; // newTodo로 초기 캐시 생성
        return [...prevTodos, newTodo];
      });
    },
    onError: (error) => window.alert(error.message),
  });
};

// 삭제
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: (deletedId) => {
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!deletedId) return prevTodos;
        return prevTodos?.filter((todo) => todo.id !== deletedId);
      });
    },
    onError: (error) => window.alert(error.message),
  });
};

// 수정
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: (updateTodo) => {
      const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list); // 원본 캐시 데이터

      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return prevTodos;

        return prevTodos.map((prevTodo) =>
          prevTodo.id === updateTodo.id
            ? { ...prevTodo, ...updateTodo }
            : prevTodo,
        );
      });
      return {
        prevTodos,
      };
    },
    onError: (error, variable, context) => {
      if (context?.prevTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.todo.list,
          context.prevTodos,
        );
      }
    },
  });
};
