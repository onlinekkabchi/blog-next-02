"use client";

import { useEffect } from "react";
import StoryBox from "../components/storyBox/storyBox";
import { Stack, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { redirect } from "next/dist/server/api-utils";

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
    <>
      <ThemeProvider theme={theme}>
        <StoryBox />
      </ThemeProvider>
    </>
  );
}

// import Story from "../components/storyBox/story";
// import StoryBox from "../components/storyBox/storyBox";

// async function heroes() {
//   const res = await fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Home() {
//   const data = await heroes();

//   return (
//     <div>
//       <StoryBox>
//         {data.members.map((item) => (
//           <Story title={item.name} content={item.secretIdentity} />
//         ))}
//       </StoryBox>
//     </div>
//   );
// }
