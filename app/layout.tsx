import { Providers } from "@/providers";
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
        <TodoProvider>
          <Providers>{children}</Providers>
        </TodoProvider>
      </body>
    </html>
  );
}
