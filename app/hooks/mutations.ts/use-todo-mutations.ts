// app/hooks/use-todo-mutations.ts

import { createTodo, deleteTodo, updateTodo } from "@/app/services/todo";
import { useMutation } from "@tanstack/react-query";

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, // 요청 시작 시
    onSettled: () => {}, // 요청 완료 시 (성공/실패 모두)
    onSuccess: () => {}, // 요청 성공 시
    onError: (error) => window.alert(error.message), // 요청 실패 시
  });
};
export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: deleteTodo,
    onError: (error) => window.alert(error.message),
  });
};

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: updateTodo,
    onError: (error) => window.alert(error.message),
  });
};
