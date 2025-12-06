"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

interface TodoEditorProps {
  addTodo: (content: string) => void;
}

const TodoEditor = ({ addTodo }: TodoEditorProps) => {
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (content === "") return contentRef.current?.focus();

    addTodo(content);
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
      <Button>추가</Button>
    </form>
  );
};

export default TodoEditor;
