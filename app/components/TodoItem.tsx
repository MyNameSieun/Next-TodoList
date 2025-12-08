"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Todo } from "../types/Todo";
import React from "react";
import {
  useDeleteTodo,
  useUpdateTodo,
} from "../hooks/mutations.ts/use-todo-mutations";

const TodoItem = ({ id, content, isDone, date }: Todo) => {
  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodo();
  const { mutate: updateTodo } = useUpdateTodo();

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
