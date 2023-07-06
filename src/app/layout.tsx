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
      <head>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.2.0/kakao.min.js"
          integrity="sha384-x+WG2i7pOR+oWb6O5GV5f1KN2Ko6N7PTGPS7UlasYWNxZMKQA63Cj/B2lbUmUfuC"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <header>
          <SideMenu />
          <span>
            <a href="/">
              <h1>짧은괴담블로그</h1>
              <p>ScaryShortStory</p>
            </a>
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
