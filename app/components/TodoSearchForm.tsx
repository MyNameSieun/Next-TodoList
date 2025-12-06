const TodoSearchForm = () => {
  return (
    <form className="mb-3 flex border-b">
      <input
        className="flex-1 p-3 outline-none focus:border-(--color-primary)"
        placeholder="검색어를 입력하세요"
      />
    </form>
  );
};

export default TodoSearchForm;
