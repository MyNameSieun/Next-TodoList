const TodoHeader = () => {
  return (
    <header className="text-3xl font-bold">
      <time dateTime={new Date().toISOString()}>
        {new Date().toDateString()} 📅
      </time>
    </header>
  );
};

export default TodoHeader;
