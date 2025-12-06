"use client";

import { useMemo, useReducer, useState } from "react";
import TodoCount from "../components/TodoCount";
import TodoEditor from "../components/TodoEditor";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";
import { mockData } from "../mockData";
import { Todo } from "../types/Todo";

// 1. 액션 타입 정의
type Action =
  | { type: "CREATE"; data: Todo }
  | { type: "DELETE"; targetId: string }
  | { type: "UPDATE"; targetId: string };

// 2. 리듀서 함수 생성
const reducerTodo = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.targetId);
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      );
    default:
      return state;
  }
};

const TodoPage = () => {
  // 3. useReducer 훅 호출
  const [state, dispatch] = useReducer(reducerTodo, mockData);
  const [search, setSearch] = useState("");

  // 4. 액션 객체 전달
  const addTodo = (content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: crypto.randomUUID(),
        content: content,
        isDone: false,
        time: new Date().getTime(),
      },
    });
  };

  const toggleTodo = (targetId: string) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const deleteTodo = (targarId: string) => {
    dispatch({
      type: "DELETE",
      targetId: targarId,
    });
  };

  const filteredTodos = state.filter((todo) =>
    todo.content.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출!");
    const totalCount = state.length;
    const doneCount = state.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [state]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white p-32 shadow-xl">
        <div className="flex flex-col gap-6">
          <TodoHeader />
          <TodoEditor addTodo={addTodo} />
        </div>

        <TodoCount
          totalCount={totalCount}
          doneCount={doneCount}
          notDoneCount={notDoneCount}
        />

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
