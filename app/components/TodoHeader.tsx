const TodoHeader = () => {
  return (
    <header className="text-3xl font-bold">
      <time>{new Date().toDateString()} 📅</time>
    </header>
  );
};

export default TodoHeader;
