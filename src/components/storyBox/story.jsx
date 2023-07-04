"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";
// import { Paper } from "@mui/material";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const AccordionComponent = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#f5f5f5",
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
        <Stack direction="row" paddingTop={3} paddingBottom={1}>
          {tags.map((item, index) => (
            <Chip key={index} label={item} variant="outlined" />
            // <Typography key={index} variant="body2">
            //   {item}
            // </Typography>
          ))}
        </Stack>
      </AccordionDetails>
    </AccordionComponent>
  );
}
