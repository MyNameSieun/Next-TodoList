import Editor from "../components/TodoEditor";
import Header from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoSearchForm from "../components/TodoSearchForm";

const TodoPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white p-32 shadow-xl">
        <div className="flex flex-col gap-6">
          <Header />
          <Editor />
        </div>

        <h2 className="mt-10 text-[1.3rem] font-bold text-(--color-primary)">
          3 tasks
        </h2>
        <TodoSearchForm />

        <TodoList />
      </div>
    </main>
  );
};

export default TodoPage;
