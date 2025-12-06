import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  filteredTodos: Todo[];
  toggleTodo: (targetId: string) => void;
  deleteTodo: (targetId: string) => void;
}

const TodoList = ({ filteredTodos, toggleTodo, deleteTodo }: TodoListProps) => {
  return (
    <section className="flex flex-col gap-1">
      <ul className="flex max-h-[35vh] flex-col gap-1 overflow-auto px-3">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
