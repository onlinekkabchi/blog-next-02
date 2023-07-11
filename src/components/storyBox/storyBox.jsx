"use client";

import { useEffect, useState } from "react";
import Story from "./story.jsx";
import { Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/usePagination/usePagination.js";

export default async function StoryBox() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const PER_PAGE = 10;
  const count = Math.ceil(data.length / PER_PAGE);

  const handleData = async () => {
    try {
      await fetch("/api/story")
        .then((res) => res.json())
        .then((res) => setData(res.result));
    } catch (error) {
      console.log("Error:", error.message);
    } finally {
      console.log(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("/api/story")
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
      {/* {children} */}
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleData}
      />

      <Grid height="100vh" container direction="column" spacing={2} marginY={2}>
        {data.map((item, index) => (
          <Grid key={index} item>
            <Story
              order={item.order}
              title={item.storyTitle}
              content={item.storyContent}
              tags={item.storyTag}
            />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleData}
      />
    </>
  );
}
