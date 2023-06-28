"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default async function Story({ order, title, content, tags }) {
  return (
    <Accordion className="story">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={order}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{content}</Typography>
        <div>
          {tags.map((item, index) => (
            <Typography key={index}>{item}</Typography>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
