"use client";

import { useSearch } from "../context/TodoSearchContext";

const TodoSearch = () => {
  const { search, setSearch } = useSearch();
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-3 flex border-b">
      <input
        value={search}
        onChange={handleChangeSearch}
        className="flex-1 p-3 outline-none focus:border-(--color-primary)"
        placeholder="검색어를 입력하세요"
      />
    </form>
  );
};

export default TodoSearch;
