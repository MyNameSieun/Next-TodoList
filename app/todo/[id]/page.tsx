"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useTodoState } from "@/app/context/TodoContext";

const TodoDetailPage = () => {
  const todos = useTodoState();

  const router = useRouter();
  const params = useParams();
  const todo = todos.find((todo) => todo.id === params.id);
  if (!todo) return <p>존재하지 않는 todo입니다.</p>;

  const { id, content, isDone, time } = todo;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <article className="flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center gap-10 rounded-2xl bg-white p-32 shadow-xl">
        <time className="text-sm text-(--color-gray)">
          {new Date(time).toLocaleString()}
        </time>

        <h1 className="text-2xl font-bold">{content}</h1>

        <Button onClick={() => router.back()}>뒤로가기</Button>
      </article>
    </main>
  );
};

export default TodoDetailPage;
