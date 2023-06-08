import Link from "next/link";
import "../styles/style.css";

import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scary Short Story Blog",
  description: "Scary Short Story Blog",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`max-w-2xl mx-auto py-10 px-4 antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <header>
          <div className="flex items-center justify-between">
            <nav className="ml-auto text-sm font-medium space-x-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <h1>한줄괴담 블로그</h1>

        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <footer>
          <p>onlinekkabchi@gmail.com</p>
          <a href="https://github.com/onlinekkabchi">onlinekkabchi github</a>
        </footer>
      </body>
    </html>
  );
}
