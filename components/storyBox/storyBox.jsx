"use client";

import { useState, useEffect } from "react";

export default function StoryBox() {
  const [data, setData] = useState([]);

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
    <ul>
      {data.map((item, index) => (
        <p key={index}>{item.storyTitle}</p>
      ))}
    </ul>
  );
}
