import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Star = styled.div`
  /* border: 1px solid; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BtnBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

let starList = [1, 2, 3, 4, 5];
const Customer = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#F4F6F8",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "100px",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontSize: "50px", fontWeight: "600" }}>
            What Our Customer Say
          </Typography>
          <Star>
            {starList.map((item) => {
              return <StarIcon color="warning" />;
            })}
          </Star>
          <Typography
            sx={{
              width: "55%",
              textAlign: "center",
              fontFamily: "Century Gothic",
              fontSize: "15px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            cum aut, sapiente placeat doloribus sed necessitatibus, repudiandae,
            similique ratione inventore
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            Jayvion Simon
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "14px",
              colo: "gray",
            }}
          >
            HR Manager
          </Typography>
          <BtnBox>
            <Button>
              <KeyboardArrowLeftIcon />
            </Button>
            <Button>
              <KeyboardArrowRightIcon />
            </Button>
          </BtnBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customer;
