import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DescriptionIcon from "@mui/icons-material/Description";

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 25px;
  /* border: 1px solid red; */
  width: 40%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 50%;
`;
const Post = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "100px 0",
          background:
            "linear-gradient(to bottom, #2E161F 0%, #152437 100%, #341823 100%)",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            // border: "1px solid red",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Left>
            <Typography
              sx={{ color: "#FA541C", fontSize: "12px", fontFamily: "Arial" }}
            >
              FOR RECRUITERS
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "42px",
                fontWeight: "600",
                fontFamily: "Arial",
              }}
            >
              Do You Have A Position To Post Job?
            </Typography>
            <Typography
              sx={{
                color: "gray",
                fontSize: "15px",
                fontWeight: "600",
                fontFamily: "Arial",
              }}
            >
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit.
            </Typography>

            <Button
              variant
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                background: "#FA541C",
                padding: "8px",
                gap: "8px",
                borderRadius: "8px",
                textTransform: "capitalize",
                fontWeight: "600",
                "&:hover": { background: "#FA544C" },
              }}
            >
              <DescriptionIcon /> Post A Job
            </Button>
          </Left>
          <Right>
            <img
              src="https://zone-ui.vercel.app/assets/illustrations/illustration_recruitment.svg"
              alt=""
            />
          </Right>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Post;
