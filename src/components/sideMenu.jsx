"use client";

import { useState } from "react";
import { Box, List, ListItem, SwipeableDrawer, styled } from "@mui/material";

const DrawerComponent = styled(SwipeableDrawer)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function SideMenu() {
  const anchor = "left";
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <svg
        onClick={toggleDrawer(anchor, true)}
        width="25px"
        height="25px"
        viewBox="0 0 20 20"
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          fillRule="evenodd"
          d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
        />
      </svg>
      <DrawerComponent>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          <Box>
            <svg
              onClick={toggleDrawer(anchor, false)}
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="#bebebe"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="#bebebe"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#bebebe"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>

          <List>
            <ListItem>메뉴준비중</ListItem>
          </List>
        </SwipeableDrawer>
      </DrawerComponent>
    </>
  );
}
