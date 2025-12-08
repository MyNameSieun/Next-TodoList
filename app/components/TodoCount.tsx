"use client";

import { useTodos } from "../hooks/queries/use-todos-queries";

const TodoCount = () => {
  const { data } = useTodos();
  if (!data) return <div>데이터가 없습니다.</div>;

  const totalCount = data.length;
  const doneCount = data.filter((todo) => todo.isDone).length;
  const notDoneCount = totalCount - doneCount;

  return (
    <h2 className="mt-10 text-[1.3rem] font-bold text-(--color-primary)">
      {totalCount} tasks
    </h2>
  );
};

export default TodoCount;
