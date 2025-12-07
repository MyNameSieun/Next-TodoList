import { Todo } from "../types/Todo";

type Action =
  | { type: "CREATE"; data: Todo }
  | { type: "DELETE"; targetId: string }
  | { type: "UPDATE"; targetId: string };

export const reducerTodo = (state: Todo[], action: Action) => {
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
