"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TodoEditor = () => {
  return (
    <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
      <Input placeholder="할 일을 입력하세요" className="shadow-sm" />
      <Button>추가</Button>
    </form>
  );
};

export default TodoEditor;
