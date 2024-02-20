"use client";

import "./story-box.css";

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
    <ul className="story-box">
      {data.map((item, index) => (
        <li key={item.order || index}>
          <a href={item.href} target="blank">
            <div dangerouslySetInnerHTML={{ __html: item.innerHTML }} />
          </a>

          {/* <div>{item.storyTitle}</div>
          <div>{item.storyContent}</div> */}
          {/* <div>
            {item.storyTag.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div> */}
        </li>
      ))}
    </ul>
    //   <Box marginY={2}>
    //     {data.map((item, index) => (
    //       <Story
    //         key={index}
    //         index={index}
    //         order={item.order}
    //         title={item.storyTitle}
    //         content={item.storyContent}
    //         tags={item.storyTag}
    //       />
    //     ))}
    //   </Box>
    // </>
  );
}
