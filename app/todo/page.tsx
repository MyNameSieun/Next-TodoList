// app/todo/page.tsx

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TodoCount from "../components/TodoCount";
import TodoEditor from "../components/TodoEditor";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import { fetchTodos } from "../services/todo";

const TodoPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="flex min-h-screen items-center justify-center">
        <div className="flex h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white p-32 shadow-xl">
          <div className="flex flex-col gap-6">
            <TodoHeader />
            <TodoEditor />
          </div>

          <TodoCount />

          <TodoSearch />

          <TodoList />
        </div>
      </main>
    </HydrationBoundary>
  );
};

export default TodoPage;
