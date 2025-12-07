"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Todo } from "../types/Todo";
import React from "react";
import { useTodoDispath } from "../context/TodoContext";

const TodoItem = ({ id, content, isDone, time }: Todo) => {
  const { onToggle, onDelete } = useTodoDispath();

  const handleToggleTodo = () => {
    onToggle(id);
  };

  const handleDeleteTodo = () => {
    onDelete(id);
  };

  return (
    <li className="flex items-center gap-3 border-b py-3">
      <input type="checkbox" onChange={handleToggleTodo} checked={isDone} />
      <Link className="flex-1" href={`/todo/${id}`}>
        <p>{content}</p>
      </Link>

      <time className="text-sm text-(--color-gray)">
        {new Date(time).toLocaleDateString()}
      </time>

      <Button onClick={handleDeleteTodo} variant={"destructive"}>
        삭제
      </Button>
    </li>
  );
};

export default React.memo(TodoItem);
