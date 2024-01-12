import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  border: 1px solid #f5f7f7;
  flex-direction: column;
  border-radius: 15px;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  height: 100%;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 10px;
  padding-bottom: 10px;
  box-shadow: 50px 50px 50px 1px #f5f7f7;

  img {
    width: 100%;
    height: 80%;
    border-radius: 15px 15px 0 0;
    object-fit: cover;
    transition: 0.2s linear;
  }

  &:hover img {
    transform: scale(1.09);
  }

  &:hover {
    box-shadow: 150px 100px 100px 100px #f5f7f9;
    transition: 0.2s linear;
  }
`;

const Img = ({ ...props }) => {
  return (
    <Div>
      <img src={props.imgUrl} alt="" />
      <Typography
        sx={{ fontSize: "16px", fontFamily: "Arial", fontWeight: "600" }}
      >
        {props.address}
      </Typography>
      <Typography sx={{ fontSize: "12px", color: "gray" }}>
        {props.jobs}
      </Typography>
    </Div>
  );
};

export default Img;
