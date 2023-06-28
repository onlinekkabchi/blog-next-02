"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default async function Story({ order, title, content, tags }) {
  return (
    <Accordion className="story">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={order}
      >
        <Typography variant="subtitle2">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{content}</Typography>
        <Stack direction="row" spacing={1} paddingTop={3}>
          {tags.map((item, index) => (
            <Chip key={index} label={item} variant="outlined" />
            // <Typography key={index} variant="body2">
            //   {item}
            // </Typography>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
