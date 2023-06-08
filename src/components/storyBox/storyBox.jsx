"use client";

import { useEffect, useState } from "react";

export default async function StoryBox() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState([0, 1, 2]);

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

  useEffect(() => {
    setPage([1, 2]);
  }, []);

  return (
    <>
      <div className="story-index-box">
        {page.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <ul className="story-box">
        {data.map((item, index) => (
          <div key={index} className="story--card">
            <input
              className="story--input"
              type="radio"
              name="story--name"
              id={item.order}
            />
            <label className="story--label" htmlFor={item.order}>
              <p className="story--title">{item.storyTitle}</p>
            </label>
            <div className="story--content">
              <p className="story--content-text">{item.storyContent}</p>
              <Tags data={item.storyTag} />
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

function Tags({ data }) {
  return (
    <div className="story--tag-box">
      {data.length > 0 ? (
        data.map((item, index) => (
          <button className="story--tag" key={index}>
            {item}
          </button>
        ))
      ) : (
        <button className="story--tag">NOTAG</button>
      )}
    </div>
  );
}
