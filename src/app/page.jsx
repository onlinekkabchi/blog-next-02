"use client";

import { useEffect } from "react";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import StoryBox from "../components/storyBox/storyBox";
import ChatBot from "../components/chatBot/chatBot";

const theme = createTheme({
  typography: {
    fontFamily: "NEXON Lv1 Gothic OTF",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'NEXON Lv1 Gothic OTF';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
      `,
    },
  },
});

export default async function Home() {
  useEffect(() => {
    if (!window.Kakao.Auth) {
      window.Kakao.init("000405df46f6f17c190d9be7febdbd24");
    }
    console.log(window.Kakao);
  }, []);

  return (
    <div>
      <StoryBox />
      chatbot
      <ChatBot />
    </div>
  );

  // return (
  //   <>
  //     <ThemeProvider theme={theme}>
  //       <StoryBox />
  //     </ThemeProvider>
  //   </>
  // );
}
