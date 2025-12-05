import Editor from "../components/TodoEditor";
import Header from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    // min-h-screen :Todo 개수가 적어도 레이아웃 유지됨, 흰 카드가 항상 정중앙
    // w-full max-w-4xl: 모바일에서는 꽉 채우고, 데스크탑에서는 적당한 폭을 유지
    // min-h-[80vh]: 최소 높이만 보장하고 내용 많으면 늘어나는 방식
    // max-h-[80vh]: 카드 높이 최댓값 줘서 내부만 스크롤

    <main className="flex min-h-screen items-center justify-center">
      <div className="flex max-h-[80vh] w-full max-w-4xl flex-col gap-10 overflow-auto rounded-2xl bg-white p-32 shadow-xl">
        <Header />
        <Editor />
        <TodoList />
      </div>
    </main>
  );
};

export default TodoPage;
