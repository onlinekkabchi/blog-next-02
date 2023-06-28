"use client";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import StoryBox from "../components/storyBox/storyBox";

export default async function Home() {
  return (
    <>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <ul className="story-box">
          <StoryBox />
        </ul>
        <Pagination count={11} defaultPage={6} />
      </Stack>
    </>
  );
}
