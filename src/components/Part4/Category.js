import React from "react";
import styled from "styled-components";
// import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import { Button, Typography } from "@mui/material";
// import Diversity2Icon from "@mui/icons-material/Diversity2";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0px;
  border: 1px solid #edeff1;
  border-radius: 10px;
  width: 23%;
  gap: 20px;

  .icon {
    border-radius: 50%;
    padding: 3px;
    font-size: 50px;
    font-weight: 500;
    color: black;
  }

  &:hover {
    box-shadow: 10px 10px 180px 50px #edeff1;
    transition: 0.5s all;
  }

  &:hover .icon {
    color: white;
    background-color: #f07427;
    transition: 0.3s all linear;
  }
`;

const Category = ({ ...props }) => {
  return (
    <Div>
      <Button>{props.icon}</Button>
      <Typography
        sx={{ fontSize: "18px", fontWeight: "600", fontFamily: "sans-serif" }}
      >
        {props.skill}
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "600",
          fontFamily: "sans-serif",
          color: "gray",
        }}
      >
        {props.jobs}
      </Typography>
    </Div>
  );
};

export default Category;
