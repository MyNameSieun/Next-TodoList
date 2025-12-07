"use client";
import { ReactNode, useCallback, useMemo, useReducer } from "react";
import { TodoDispathContext, TodoStateContext } from "./TodoContext";
import { reducerTodo } from "./todoReducer";
import { mockData } from "../mockData";

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducerTodo, mockData);

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: crypto.randomUUID(),
        content: content,
        isDone: false,
        time: new Date().getTime(),
      },
    });
  }, []);

  const onToggle = useCallback((targetId: string) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targarId: string) => {
    dispatch({
      type: "DELETE",
      targetId: targarId,
    });
  }, []);

  const memoizedDispatch = useMemo(
    () => ({ onCreate, onToggle, onDelete }),
    [onCreate, onToggle, onDelete],
  );

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispathContext.Provider value={memoizedDispatch}>
        {children}
      </TodoDispathContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProvider;
