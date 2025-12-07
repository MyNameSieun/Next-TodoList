import { useSearch } from "../context/TodoSearchContext";
import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../services/fetch-todo";

const TodoList = () => {
  const {
    data: todos, // data를 todos라는 이름으로 사용
    isLoading,
    error,
  } = useQuery({
    queryFn: fetchTodos, // 실행할 비동기 함수
    queryKey: ["todos"], // 데이터를 삭제하는 고유 키 (캐싱에 사용)
    retry: 0, // 재시도 횟수 설정 (기본값: 3)
  });
  const { search } = useSearch();

  if (error) return <div>오류가 발생했습니다.</div>;
  if (isLoading) return <div>로딩 중...</div>;

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
