import Editor from "../components/TodoEditor";
import Header from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex max-h-[80vh] w-full max-w-4xl flex-col gap-10 overflow-hidden rounded-2xl bg-white p-32 shadow-xl">
        <Header />
        <Editor />
        <TodoList />
      </div>
    </main>
  );
};

export default TodoPage;
