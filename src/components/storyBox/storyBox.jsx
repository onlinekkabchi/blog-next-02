"use client";

import { useEffect, useState } from "react";
import Story from "./story.jsx";
import { Grid, Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";

export default async function StoryBox() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("/api/story", {
          method: "POST",
          body: JSON.stringify({ gt: 0, lt: 30 }),
        })
          .then((res) => res.json())
          .then((res) => setData(res.result));
      } catch (error) {
        console.log("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box marginY={2}>
        {data.map((item, index) => (
          <Story
            key={index}
            index={index}
            order={item.order}
            title={item.storyTitle}
            content={item.storyContent}
            tags={item.storyTag}
          />
        ))}
      </Box>
    </>
  );
}
