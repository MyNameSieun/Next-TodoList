"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useSearch } from "../context/TodoSearchContext";
import { useTodos } from "../hooks/queries/use-todos-queries";
import TodoItem from "./TodoItem";
import { QUERY_KEYS } from "@/lib/keys.constant";
import { Todo } from "../types/Todo";

const TodoList = () => {
  const queryClient = useQueryClient();
  const { data: todoIds, isLoading, error } = useTodos();
  const { search } = useSearch();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  // id 배열 기반으로 detail 캐시에서 todo 데이터 읽어오기
  const todos = todoIds?.map((id) =>
    queryClient.getQueryData<Todo>(QUERY_KEYS.todo.detail(id)),
  );

  // content 기준 필터링
  const filteredTodos = todos?.filter((todo) =>
    todo?.content.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  return (
    <section className="flex flex-col gap-1">
      <ul className="flex max-h-[35vh] flex-col gap-1 overflow-auto px-3">
        {filteredTodos?.map((todo) => (
          <TodoItem key={todo!.id} {...todo!} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
