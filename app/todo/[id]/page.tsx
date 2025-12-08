"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useTodoById } from "@/app/hooks/queries/use-todos-queries";

const TodoDetailPage = () => {
  const router = useRouter();
  const params = useParams();

  const { data: todo, isLoading, error } = useTodoById(String(params.id));

  if (error) return <div>에러 발생: {error.message}</div>;
  if (isLoading) return <div>로딩 중 ...</div>;
  if (!todo) return <p>존재하지 않는 todo입니다.</p>;

  const { id, content, isDone, date } = todo;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <article className="flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center gap-10 rounded-2xl bg-white p-32 shadow-xl">
        <time className="text-sm text-(--color-gray)">
          {date ? new Date(date).toLocaleDateString() : 0}
        </time>
        <h1 className="text-2xl font-bold">{content}</h1>

        <Button onClick={() => router.back()}>뒤로가기</Button>
      </article>
    </main>
  );
};

export default TodoDetailPage;
