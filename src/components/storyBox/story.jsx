"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, styled } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const AccordionComponent = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#fafafa",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionTitleComponent = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default async function Story({ order, title, content, tags }) {
  const sendMessage = async () => {
    window.Kakao.Share.sendDefault({
      objectType: "text",
      text: title,
      link: {
        mobileWebUrl: `https://blog-next-02.vercel.app/story/${order}`,
        webUrl: `https://blog-next-02.vercel.app/story/${order}`,
      },
    });
    // if (typeof navigator.share === "undefined") {
    //   return;
    // }
    // try {
    //   await navigator.clipboard.writeText();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <AccordionComponent className="story">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={order}
      >
        <AccordionTitleComponent>
          <Typography variant="subtitle2">{title}</Typography>
        </AccordionTitleComponent>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" paddingLeft={1}>
          {content}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          paddingTop={3}
          paddingBottom={1}
        >
          <Box paddingLeft={1} paddingRight={2} onClick={() => sendMessage()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 256 256"
              style={{ borderRadius: "8px" }}
            >
              <path
                fill="#FFE812"
                d="M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
              />
              <path d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" />
              <path
                fill="#FFE812"
                d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
              />
            </svg>
          </Box>
          {/* <Box paddingRight={2}>
            <svg width="35px" height="35px" viewBox="0 -0.5 25 25" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
                stroke="#949494"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195"
                stroke="#949494"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box> */}

          {tags.map((item, index) => (
            <Box key={index} paddingRight={1}>
              <Chip label={item} variant="filled" />
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </AccordionComponent>
  );
}
