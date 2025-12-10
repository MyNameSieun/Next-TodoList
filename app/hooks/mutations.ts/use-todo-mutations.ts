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
      queryClient.setQueryData(QUERY_KEYS.todo.detail(newTodo.id), newTodo);

      queryClient.setQueryData<string[]>(QUERY_KEYS.todo.list, (prevIds) => {
        return prevIds ? [...prevIds, newTodo.id] : [newTodo.id];
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
      queryClient.removeQueries({
        queryKey: QUERY_KEYS.todo.detail(deletedId),
      });

      queryClient.setQueryData<string[]>(QUERY_KEYS.todo.list, (prevIds) => {
        if (!prevIds) return prevIds;
        return prevIds?.filter((id) => id !== deletedId);
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
    onMutate: async (updateTodo) => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.detail(updateTodo.id),
      });

      const prevTodo = queryClient.getQueryData<Todo>(
        QUERY_KEYS.todo.detail(updateTodo.id),
      );

      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(updateTodo.id),
        (prevTodo) => (prevTodo ? { ...prevTodo, ...updateTodo } : prevTodo),
      );

      return {
        prevTodo,
      };
    },
    onError: (error, variable, context) => {
      if (context?.prevTodo) {
        queryClient.setQueryData<Todo>(
          QUERY_KEYS.todo.detail(context.prevTodo.id),
          context.prevTodo,
        );
      }
    },
  });
};
