import "../styles/style.css";
import "../styles/globals.css";

// export const metadata = {
//   title: "Scary Short Story Blog",
//   description: "Scary Short Story Blog",
// };

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
      <body className="flex flex-col px-10">
        <header className="flex flex-col justify-between ">
          {/* <SideMenu /> */}
          <span className="flex justify-end space-x-4 py-4">
            <div className="flex">
              <input type="text" className="bg-slate-100" />
              <svg width="30px" height="30px" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.989 15.4905L19.5 19.0015"
                  stroke="#000000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </span>
          <span className="py-2">
            <a href="/">
              <h1 className="text-3xl font-bold">짧은괴담블로그</h1>
              <p>ScaryShortStory</p>
            </a>
          </span>
        </header>
        <main className="py-5">{children}</main>
        <footer>
          <aside>
            <p>seo box</p>
          </aside>
          <p>onlinekkabchi@gmail.com</p>
          <a className="underline" href="https://github.com/onlinekkabchi">
            onlinekkabchi github link
          </a>
        </footer>
      </body>
    </html>
  );
}
