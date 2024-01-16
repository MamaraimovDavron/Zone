/* eslint-disable jsx-a11y/no-distracting-elements */
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Img from "./Img";

const Images = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
`;

const imgUrl = [
  { img: "https://zone-ui.vercel.app/assets/logo/airbnb_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/dropbox_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/facebook_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/google_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/heroku_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/lenovo_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/microsoft_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/netflix_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/slack_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/spotify_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/tripadvisor_original.svg" },
  { img: "https://zone-ui.vercel.app/assets/logo/vimeo_original.svg" },
];

const OurClients = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid red",
            padding: "100px",
            gap: "30px",
          }}
        >
          <Typography sx={{ fontSize: "50px", fontWeight: "600" }}>
            Our Clients
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              width: "50%",
              textAlign: "center",
              color: "gray",
            }}
          >
            Curabitur a felis in nunc fringilla tristique. Fusce egestas elit
            eget lorem. Etiam vitae tortor.
          </Typography>
          <marquee>
            <Images>
              {imgUrl.map((item) => {
                return <Img imgUrl={item.img} />;
              })}
            </Images>
          </marquee>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurClients;
