"use client";

import { useState } from "react";
import TodoCount from "../components/TodoCount";
import TodoEditor from "../components/TodoEditor";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import { useTodoState } from "../context/TodoContext";

const TodoPage = () => {
  const [search, setSearch] = useState("");
  const todos = useTodoState();

  const filteredTodos = todos.filter((todo) =>
    todo.content.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white p-32 shadow-xl">
        <div className="flex flex-col gap-6">
          <TodoHeader />
          <TodoEditor />
        </div>

        <TodoCount />

        <TodoSearch search={search} setSearch={setSearch} />

        <TodoList filteredTodos={filteredTodos} />
      </div>
    </main>
  );
};

export default TodoPage;
