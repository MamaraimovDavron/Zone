import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Card = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid red; */
  box-shadow: 10px 10px 10px 1px #f4f6f6, 20px 20px 100px 1px #f4f6f6;
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    box-shadow: 10px 10px 60px 1px #c8c8c8;
    transition: 0.3s all linear;
  }

  .line {
    width: 100%;
    border-top: 1px dotted #e9ecee;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border-radius: 10px;

  img {
    width: 16%;
    border-radius: 10px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  gap: 10px;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid green; */
  gap: 5px;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  .top {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins";
  }
`;

const Cards = ({ ...props }) => {
  return (
    <Card>
      <CardHeader>
        <img src={props.imgUrl} alt="DataScientist" />

        <FavoriteBorderIcon
          sx={{
            padding: "3px",
            color: "gray",

            "&:hover": {
              background: "pink",
              borderRadius: "50%",
            },
          }}
        />
      </CardHeader>

      <CardBody>
        <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
          {props.job}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            color: "#00B8D9",
            fontFamily: "inherit",
            fontWeight: "600",
          }}
        >
          {props.address}
        </Typography>

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#6F7D8A",
            fontSize: "13px",
          }}
        >
          <LocationOnIcon
            sx={{
              color: "#6F7D8A",
              fontSize: "16px",
            }}
          />
          {props.location}
        </Typography>

        <Typography
          sx={{
            color: "#A0ABB7",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          Posted day: 10 Jan 2024
        </Typography>
      </CardBody>
      <div className="line"></div>

      <CardFooter>
        <div className="top">
          <Typography
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "gray",
              fontFamily: "Century Gothic",
              gap: "5px",
            }}
          >
            {" "}
            <SignalCellularAltIcon />
            {props.yearExp}
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Century Gothic",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "gray",
              gap: "5px",
            }}
          >
            <WatchLaterIcon /> {props.freelance}
          </Typography>
        </div>
        <div className="bottom">
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Century Gothic",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "gray",
              gap: "5px",
            }}
          >
            <SportsEsportsIcon /> {props.comp}
          </Typography>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Century Gothic",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              color: "gray",
              gap: "5px",
            }}
          >
            <PermIdentityIcon /> {props.user}
          </Typography>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Cards;
