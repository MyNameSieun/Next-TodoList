"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { useCreateTodo } from "../hooks/mutations.ts/use-todo-mutations";

const TodoEditor = () => {
  const { mutate, isPending } = useCreateTodo();
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content === "") return contentRef.current?.focus();

    mutate(content);
    setContent("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form className="flex gap-3" onSubmit={handleAddTodo}>
      <Input
        value={content}
        ref={contentRef}
        onChange={handleChangeInput}
        placeholder="할 일을 입력하세요"
        className="shadow-sm"
      />
      <Button disabled={isPending}>{isPending ? "추가중..." : "추가"}</Button>
    </form>
  );
};

export default TodoEditor;
