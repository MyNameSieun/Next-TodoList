"use client";

import { useState } from "react";
import TodoCount from "../components/TodoCount";
import TodoEditor from "../components/TodoEditor";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";

const TodoPage = () => {
  return (
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
  );
};

export default TodoPage;
