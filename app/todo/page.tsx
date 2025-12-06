"use client";

import { useState } from "react";
import TodoCount from "../components/TodoCount";
import TodoEditor from "../components/TodoEditor";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import { mockData } from "../mockData";

const TodoPage = () => {
  const [todos, setTodos] = useState(mockData);
  const [search, setSearch] = useState("");

  const addTodo = (content: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      content: content,
      isDone: false,
      time: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (targetId: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const deleteTodo = (targarId: string) => {
    setTodos(todos.filter((todo) => todo.id !== targarId));
  };

  const filteredTodos = todos.filter((todo) =>
    todo.content.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );
  const getAnalyzedData = () => {
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white p-32 shadow-xl">
        <div className="flex flex-col gap-6">
          <TodoHeader />
          <TodoEditor addTodo={addTodo} />
        </div>

        <TodoCount getAnalyzedData={getAnalyzedData} />

        <TodoSearch search={search} setSearch={setSearch} />

        <TodoList
          filteredTodos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </main>
  );
};

export default TodoPage;
