"use client";

import { useEffect, useState } from "react";
import Story from "./story.jsx";
import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import usePagination from "@mui/material/usePagination/usePagination.js";

export default async function StoryBox() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const PER_PAGE = 10;
  const count = Math.ceil(data.length / PER_PAGE);

  const _DATA = usePagination(data, PER_PAGE);

  // const handleChange = (e, p) => {
  //   setPage(p);
  //   _DATA.jump(p);
  // };

  const handleData = async () => {
    try {
      await fetch("/api/story")
        // .then((res) => console.log(res));
        .then((res) => res.json())
        .then((res) => setData(res.result));
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("/api/story")
          // .then((res) => console.log(res));
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
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleData}
      />

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Story
              order={item.order}
              title={item.storyTitle}
              content={item.storyContent}
              tags={item.storyTag}
            />
          </li>
        ))}
      </ul>

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
