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

const ImgBox1 = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: flex; */
  border-radius: 15px;
  gap: 10px;
  img {
    width: 100%;
    height: 90%;
    border-radius: 15px;
  }
`;

const ImgBox2 = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  border-radius: 15px;
  gap: 10px;
  img {
    width: 100%;
    height: 70%;
    border-radius: 15px;
  }
`;

const ImgBox4 = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  border-radius: 15px;
  gap: 10px;

  img {
    width: 100%;
    height: 70%;
    border-radius: 15px;
  }
`;

const ImgBox3 = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-items: center; */
  /* justify-content: center; */
  border-radius: 15px;
  img {
    width: 100%;
    height: 60%;
    border-radius: 15px;
  }
`;

const imgList1 = [
  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/career/career_2.jpg",
    date: "15 Jan 2024 * 8 minutes read",
    title: "The Ultimate Guide to Productivity Hacks",
  },
  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/career/career_5.jpg",
    date: "12 Jan 2024 * 8 minutes read",
    title: "The Future of Artificial Intelligence: Trends and ...",
  },
  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/career/career_3.jpg",
    date: "14 Jan 2024 * 8 minutes read",
    title: "Exploring the Hidden Gems of [Destination]",
  },
  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/career/career_4.jpg",
    date: "13 Jan 2024 * 8 minutes read",
    title: "How to Master the Art of Public Speaking",
  },
];

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
                // gap: "30px",
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
                    width: "90%",
                    objectFit: "cover",
                    borderRadius: "20px",
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

              <Grid
                xs={6}
                sx={{
                  // width: "100%",
                  display: "flex ",
                  flexDirection: "row",
                  gap: "30px",
                }}
              >
                <Grid
                  xs={6}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "flex-start",
                    gap: "20px",
                    // border: "1px solid red",
                    padding: "0px 10px",
                  }}
                >
                  <ImgBox1>
                    {" "}
                    <img
                      src="https://zone-ui.vercel.app/assets/images/career/career_2.jpg"
                      alt=""
                    />
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        // border: "1px solid red",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "gray",
                      }}
                    >
                      15 Jan 2024 * 8 minutes read
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "600",
                        // border: "1px solid",
                      }}
                    >
                      The Ultimate Guide to Productivity Hacks
                    </Typography>
                  </ImgBox1>

                  <ImgBox2>
                    {" "}
                    <img src={imgList1[1].imgUrl} alt="" />
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        // border: "1px solid red",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "gray",
                      }}
                    >
                      {imgList1[1].date}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "600",
                        // border: "1px solid",
                      }}
                    >
                      {imgList1[1].title}
                    </Typography>
                  </ImgBox2>
                </Grid>
                <Grid
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // justifyContent: "center",
                    gap: "20px",
                    padding: "0px 10px",
                  }}
                >
                  <ImgBox3>
                    <img src={imgList1[2].imgUrl} alt="" />
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        // border: "1px solid red",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "gray",
                      }}
                    >
                      {imgList1[2].date}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "600",
                        // border: "1px solid",
                      }}
                    >
                      {imgList1[2].title}
                    </Typography>
                  </ImgBox3>
                  <ImgBox4>
                    <img src={imgList1[3].imgUrl} alt="" />
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        // border: "1px solid red",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "gray",
                      }}
                    >
                      {imgList1[3].date}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        width: "80%",
                        fontFamily: "Poppins",
                        fontSize: "16px",
                        fontWeight: "600",
                        // border: "1px solid",
                      }}
                    >
                      {imgList1[3].title}
                    </Typography>
                  </ImgBox4>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
