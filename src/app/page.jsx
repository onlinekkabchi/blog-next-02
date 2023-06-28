"use client";

import Stack from "@mui/material/Stack";
import StoryBox from "../components/storyBox/storyBox";

export default async function Home() {
  return (
    <>
      <Stack direction="column">
        <StoryBox />
      </Stack>
    </>
  );
}
