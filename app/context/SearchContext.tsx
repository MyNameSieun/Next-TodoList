import { createContext, useContext } from "react";

interface SearchContextValue {
  search: string;
  setSearch: (search: string) => void;
}

export const SearchContext = createContext<SearchContextValue | undefined>(
  undefined,
);

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("search context 에러");
  return ctx;
};
