"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function Page() {
  const params = useParams();
  const [data, setData] = useState("");

  const fetchData = async (order) => {
    try {
      await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        // .then((res) => console.log(res));
        .then((res) => res.json())
        .then((res) => setData(res.result));
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  useEffect(() => {
    console.log(params);
    fetchData(params);
  }, []);

  if (data === undefined) {
    return <div>대기중...</div>;
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography marginBottom={1} sx={{ fontSize: 16 }}>
          {data.storyTitle}
        </Typography>

        <Typography variant="body2">{data.storyContent}</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
