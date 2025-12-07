import { useTodoState } from "../context/TodoContext";

const TodoCount = () => {
  const todos = useTodoState();

  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const notDoneCount = totalCount - doneCount;

  return (
    <h2 className="mt-10 text-[1.3rem] font-bold text-(--color-primary)">
      {totalCount} tasks
    </h2>
  );
};

export default TodoCount;
