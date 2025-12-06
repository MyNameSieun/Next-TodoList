interface TodoCountProps {
  totalCount: number;
  doneCount: number;
  notDoneCount: number;
}

const TodoCount = ({ totalCount, doneCount, notDoneCount }: TodoCountProps) => {
  return (
    <h2 className="mt-10 text-[1.3rem] font-bold text-(--color-primary)">
      {totalCount} tasks
    </h2>
  );
};

export default TodoCount;
