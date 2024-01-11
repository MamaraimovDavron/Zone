import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const BrandDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  background-color: #f4f6f8;
  /* border: 1px solid; */
  gap: 20px;
  padding: 30px;
  border-radius: 20px;
  &:hover {
    background-color: white;
    transition: 0.4s linear;
    box-shadow: 10px 10px 10px 5px #f4f6f8;
    cursor: pointer;
  }
  img {
    width: 40%;
    border-radius: 8px;
  }
`;

const Brand = ({ ...props }) => {
  return (
    <BrandDiv>
      <img src={props.imgUrl} alt="" />
      <Typography
        variant="h6"
        sx={{ fontSize: "12px", color: "gray", fontWeight: "500" }}
      >
        {props.jobs}
      </Typography>
      <Typography
        sx={{ fontSize: "14px", fontWeight: "600", textAlign: "center" }}
      >
        {props.info}
      </Typography>
    </BrandDiv>
  );
};

export default Brand;
