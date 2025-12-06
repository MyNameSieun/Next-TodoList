interface TodoCountProps {
  getAnalyzedData: () => {
    totalCount: number;
    doneCount: number;
    notDoneCount: number;
  };
}

const TodoCount = ({ getAnalyzedData }: TodoCountProps) => {
  const { totalCount } = getAnalyzedData();
  return (
    <h2 className="mt-10 text-[1.3rem] font-bold text-(--color-primary)">
      {totalCount} tasks
    </h2>
  );
};

export default TodoCount;
 