import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-[1.3rem] font-bold text-(--color-primary)">
        3 tesks
      </h2>
      <form className="mb-3">
        <input
          className="border-b p-3 outline-none focus:border-(--color-primary)"
          placeholder="검색어를 입력하세요"
        />
      </form>

      <ul className="flex flex-col gap-1">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </section>
  );
};

export default TodoList;
