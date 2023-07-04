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

const AccordionDetailComponent = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default async function Story({ order, title, content, tags }) {
  const shareData = {
    title: "짧은괴담블로그",
    text: title,
  };

  const sendMessage = async () => {
    console.log("share");
    if (typeof navigator.share === "undefined") {
      return;
    }

    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AccordionComponent className="story">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={order}
      >
        <AccordionDetailComponent>
          <Typography variant="subtitle2">{title}</Typography>
        </AccordionDetailComponent>
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
            <svg width="25px" height="25px" viewBox="0 0 25 25" fill="none">
              <g
                xmlns="http://www.w3.org/2000/svg"
                id="Communication / Share_Android"
              >
                <path
                  id="Vector"
                  d="M9 13.5L15 16.5M15 7.5L9 10.5M18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21ZM6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12C9 13.6569 7.65685 15 6 15ZM18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9Z"
                  stroke="#949494"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </Box>

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
