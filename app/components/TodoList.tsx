"use client";

import { useSearch } from "../context/TodoSearchContext";
import { useTodos } from "../hooks/queries/use-todos-queries";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodos();
  const { search } = useSearch();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  const filteredTodos = todos?.filter((todo) =>
    todo.content.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  return (
    <section className="flex flex-col gap-1">
      <ul className="flex max-h-[35vh] flex-col gap-1 overflow-auto px-3">
        {/* 데이터가 비동기라 없을 수 있으므로 옵셔널 체이닝(?) 사용 */}
        {filteredTodos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
