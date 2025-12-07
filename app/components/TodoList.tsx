import { useSearch } from "../context/SearchContext";
import { useTodoState } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoState();
  const { search } = useSearch();
  const filteredTodos = todos.filter((todo) =>
    todo.content.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );
  return (
    <section className="flex flex-col gap-1">
      <ul className="flex max-h-[35vh] flex-col gap-1 overflow-auto px-3">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
