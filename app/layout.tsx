import { Providers } from "@/providers";
import TodoProvider from "./context/TodoProvider";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#EDEDED]">
        <TodoProvider>
          <Providers>
            <ReactQueryDevtools />

            {children}
          </Providers>
        </TodoProvider>
      </body>
    </html>
  );
}
