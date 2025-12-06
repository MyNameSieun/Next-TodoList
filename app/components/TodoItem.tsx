import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Todo } from "../types/Todo";

interface TodoItemProps extends Todo {
  toggleTodo: (targetId: string) => void;
  deleteTodo: (targetId: string) => void;
}

const TodoItem = ({
  id,
  content,
  isDone,
  time,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  const handleToggleTodo = () => {
    toggleTodo(id);
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
        {new Date(time).toLocaleDateString()}
      </time>

      <Button onClick={handleDeleteTodo} variant={"destructive"}>
        삭제
      </Button>
    </li>
  );
};

export default TodoItem;
