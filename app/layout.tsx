import TodoProvider from "./context/TodoProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#EDEDED]">
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
