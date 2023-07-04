import "../styles/style.css";
import { Suspense } from "react";
import Loading from "./loading";
import SideMenu from "../components/sideMenu";

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
      <body>
        <header>
          <SideMenu />
          <span>
            <h1>짧은괴담블로그</h1>
            <p>ScaryShortStory</p>
          </span>
        </header>
        <main>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>

        <footer>
          <aside>
            <p>seo box</p>
          </aside>
          <p>onlinekkabchi@gmail.com</p>
          <a href="https://github.com/onlinekkabchi">onlinekkabchi github</a>
        </footer>
      </body>
    </html>
  );
}
