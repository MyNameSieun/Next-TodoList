"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TodoDetailPage = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center">
      <article className="flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center gap-10 rounded-2xl bg-white p-32 shadow-xl">
        <time className="text-sm text-(--color-gray)">2025.12.04</time>

        <h1 className="text-2xl font-bold">주토피아2 보러가기</h1>

        <Button onClick={() => router.back()}>뒤로가기</Button>
      </article>
    </main>
  );
};

export default TodoDetailPage;
