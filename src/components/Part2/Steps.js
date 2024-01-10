import React from "react";
import styled from "styled-components";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { Typography } from "@mui/material";

const Step = styled.div`
  /* border: 1px solid; */
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export default function Steps({ ...props }) {
  return (
    <Step>
      {`${props.icon}` === "ListAltIcon" ? (
        <ListAltIcon color="warning" sx={{ fontSize: "80px" }} />
      ) : (
        <ScreenSearchDesktopIcon color="warning" sx={{ fontSize: "80px" }} />
      )}
      <Typography
        variant="h6"
        component="h6"
        sx={{
          fontSize: "12px",
          fontFamily: "Arial",
          fontWeight: "700",
          color: "gray",
        }}
      >
        {props.step}
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontSize: "18px",
          fontFamily: "Arial",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        {props.text}
      </Typography>
      <Typography
        variant="h6"
        component="h5"
        sx={{
          fontSize: "13px",
          fontFamily: "Arial",
          fontWeight: "500",
          textAlign: "center",
          color: "gray",
        }}
      >
        {props.info}
      </Typography>
    </Step>
  );
}
