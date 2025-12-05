import { Button } from "@/components/ui/button";
import Link from "next/link";

const TodoItem = () => {
  return (
    <li className="flex items-center gap-3 border-b py-3">
      <input type="checkbox" />
      <Link className="flex-1" href={`/todo/${2}`}>
        <p>주토피아2 보러가기</p>
      </Link>

      <time className="text-sm text-(--color-gray)" dateTime="2025-12-04">
        2025.12.04
      </time>

      <Button variant={"destructive"}>삭제</Button>
    </li>
  );
};

export default TodoItem;
