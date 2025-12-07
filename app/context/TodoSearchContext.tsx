import { createContext, useContext } from "react";

interface TodoSearchContextValue {
  search: string;
  setSearch: (search: string) => void;
}
export const TodoSearchContext = createContext<
  TodoSearchContextValue | undefined
>(undefined);

export const useSearch = () => {
  const ctx = useContext(TodoSearchContext);
  if (!ctx) throw new Error("search context 에러");
  return ctx;
};
