import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 85%;
  padding: 40px;
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    gap: 30px;
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: white;
        font-size: 13px;
      }
    }
  }
`;

// const ImgBox = styled.div`
//   display: flex;
//   border-radius: 15px;
//   border: 1px solid;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   /* width: 100%;
//   height: 40%; */

//   .img1 {
//     border: 1px solid red;
//     border-radius: 10px;
//     width: 100%;
//     height: 50%;
//   }

//   .img2 {
//     border: 1px solid red;
//     border-radius: 10px;
//     width: 80%;
//     height: 50%;
//   }

//   .img3 {
//     border: 1px solid red;
//     border-radius: 10px;
//     width: 80%;
//     height: 40%;
//   }

//   .img4 {
//     border: 1px solid red;
//     border-radius: 10px;
//     width: 100%;
//     height: 80%;
//   }
// `;

const Blog = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          xs={8}
          item
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "70px 0",
            gap: "30px",
            // border: "1px solid red",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              textAlign: "left",
              fontFamily: "arial",
              fontWeight: "600",
              color: "gray",
            }}
          >
            Blog
          </Typography>

          <Grid container sx={{ display: "flex", width: "100%" }}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
                Read Our Latest News
              </Typography>
              <Typography
                sx={{ fontSize: "16px", width: "60%", color: "gray" }}
              >
                Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit
                et, volutpat molestie, porta ut, ligula.
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Poppins",
                  width: "60%",
                  textAlign: "right",
                  color: "black",
                }}
              >
                View All{" "}
                <Button sx={{ color: "black" }}>
                  <KeyboardArrowRightIcon />{" "}
                </Button>
              </Typography>
            </Grid>

            <Grid
              xs={12}
              sx={{
                width: "100%",
                display: "flex",
                boxShadow: "0px 0px 10px 2px gray",
                height: "80vh",
                marginTop: "50px",
              }}
            >
              <Grid
                xs={6}
                sx={{
                  display: "flex",
                  width: "100%",
                  borderRadius: "20px",
                  position: "relative",
                  ".img": {
                    width: "85%",
                    objectFit: "cover",
                    borderRadius: "20px",
                    filter: "blur(2px)",
                    opacity: "0.8",
                  },
                }}
              >
                <img
                  src="https://zone-ui.vercel.app/assets/images/career/career_post_02.jpg"
                  alt=""
                  className="img"
                />
                <Info>
                  <ul>
                    <li>
                      <a href="!">15 Jan 2024</a>
                    </li>
                    <li>
                      <a href="!">8 minutes read</a>
                    </li>
                  </ul>

                  <Typography
                    sx={{ fontSize: "35px", fontWeight: "600", color: "white" }}
                  >
                    10 Essential Tips for Healthy Living
                  </Typography>
                  <Typography
                    sx={{ fontSize: "15px", fontWeight: "500", color: "gray" }}
                  >
                    Occaecati est et illo quibusdam accusamus qui. Incidunt aut
                    et molestiae ut facere aut. Est quidem iusto praesentium
                    excepturi harum nihil tenetur facilis. Ut omnis voluptates
                    nihil accusantium doloribus eaque debitis.
                  </Typography>
                </Info>
              </Grid>

              {/* <Grid
                xs={6}
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                }}
              >
                <ImgBox>
                  <img
                    src="https://zone-ui.vercel.app/assets/images/career/career_2.jpg"
                    alt=""
                    className="img1"
                  />
                  <Typography>14 Jan 2024 8 minutes read</Typography>
                  <Typography>
                    The Ultimate Guide to Productivity Hacks
                  </Typography>
                </ImgBox>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
