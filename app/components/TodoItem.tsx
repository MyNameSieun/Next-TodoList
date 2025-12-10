"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  useDeleteTodo,
  useUpdateTodo,
} from "../hooks/mutations.ts/use-todo-mutations";
import { useTodoById } from "../hooks/queries/use-todos-queries";

const TodoItem = ({ id }: { id: string }) => {
  const { data: todo } = useTodoById(id, "LIST");
  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  if (!todo) throw new Error("Todo Data Undefined!");
  const { content, isDone, date } = todo;

  const handleToggleTodo = () => {
    updateTodo({ id, isDone: !isDone });
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <li className="flex items-center gap-3 border-b py-3">
      <input type="checkbox" onChange={handleToggleTodo} checked={isDone} />
      <Link className="flex-1" href={`/todo/${id}`}>
        <p>{content}</p>
      </Link>

      <time className="text-sm text-(--color-gray)">
        {new Date(date).toLocaleDateString()}
      </time>

      <Button
        disabled={isDeleting}
        onClick={handleDeleteTodo}
        variant={"destructive"}
      >
        삭제
      </Button>
    </li>
  );
};

export default React.memo(TodoItem);
