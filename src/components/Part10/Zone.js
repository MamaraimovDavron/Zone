import { Box, Grid, Typography, Badge, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

const Marketing = [
  "Landing",
  "Services",
  "Case Studies",
  "Case Study",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];

const Travel = [
  "Landing",
  "Tours",
  "Tour",
  "Checkout",
  "Order Completed",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];

const Career = [
  "Landing",
  "Jobs",
  "Job",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];

const eLearning = [
  "Landing",
  "Courses",
  "Course",
  "Blog Posts",
  "Blog Post",
  "About",
  "Contact",
];

const eCommerce = [
  "Landing",
  "Products",
  "Product",
  "Cart",
  "Checkout",
  "Order Completed",
  "Wishlist",
  "Compare",
  "Account Personal",
  "Account Wishlist",
  "Account Vouchers",
  "Account Orders",
  "Account Payment",
];

const Common = [
  "Login Cover",
  "Login Illustration",
  "Login Background",
  "Register Cover",
  "Register Illustration",
  "Register Background",
  "Forgot Password",
  "Verify Code",
  "404 Error",
  "500 Error",
  "Maintenance",
  "ComingSoon",
  "Pricing 01",
  "Pricing 02",
  "Payment",
  "Support",
];
const Div = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;

const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        font-size: 14px;
        color: black;
      }
    }
  }

  .icons {
    /* border: 1px solid; */
    display: flex;
    flex-direction: row;
    gap: 20px;
    li {
      a {
        color: #fa541c;
      }
    }
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    padding: 0;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        color: gray;
        font-size: 12px;
      }
    }
  }
`;

const Input = styled.div`
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  flex-direction: row;
  input {
    width: 70%;
    padding: 16px 15px;
    outline: none;
    border: none;
    font-size: 13px;
    font-weight: 600;
    background: #f6f7f8;
    /* border: 1px solid red; */
    border-radius: 8px 0px 0px 8px;
  }
`;

const li = ["Documentation", "Changelog", "Contributing"];
const icons = [
  <FacebookIcon />,
  <InstagramIcon />,
  <LinkedInIcon />,
  <TwitterIcon />,
];

const Zone = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            height: "90vh",
            justifyContent: "space-between",
          }}
        >
          {/* Left starts */}
          <Left>
            {/* Zone */}
            <Typography
              sx={{
                fontSize: "19px",
                fontWeight: "bold",
                letterSpacing: "1px",
                display: "flex",
                fontFamily: "Arial",
                flexDirection: "row",
                alignContent: "center",
                width: "20%",
              }}
              pt={2}
            >
              <Badge
                color="secondary"
                spacing={2}
                sx={{
                  //   border: "1px solid white",
                  "&.MuiBadge-badge": { fontSize: "9", color: "red" },
                  paddingRight: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  // border: "1px solid red",
                  position: "relative",
                }}
              >
                ZONE{" "}
                <FiberManualRecordIcon
                  sx={{
                    color: "#FA541C",
                    fontSize: "12px",
                    position: "absolute",
                    left: "55px",
                    top: "12px",
                  }}
                />
              </Badge>
            </Typography>

            <Typography
              sx={{ fontSize: "14px", fontWeight: "500", color: "gray" }}
            >
              The starting point for your next project based on
              easy-to-customize Material-UI © helps you build apps faster and
              better.
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Community
            </Typography>

            <ul>
              {li.map((item) => {
                return (
                  <li>
                    <a href="!#">{item}</a>
                  </li>
                );
              })}
            </ul>

            <Typography sx={{ fontWeight: "600" }}>
              Let’s stay in touch
            </Typography>

            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              Subscribe to our newsletter to receive latest articles to your
              inbox weekly.
            </Typography>

            <Input>
              <input type="email" placeholder="Email address" />
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  background: "black",
                  borderRadius: "10px",
                  fontWeight: "600",
                }}
              >
                Subscribe
              </Button>
            </Input>

            <Typography
              sx={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}
            >
              Social
            </Typography>

            <ul className="icons">
              {icons.map((item) => {
                return (
                  <li>
                    <a href="!#">{item}</a>
                  </li>
                );
              })}
            </ul>

            <Typography
              sx={{ fontSize: "18px", fontWeight: "600", marginTop: "20px" }}
            >
              Apps
            </Typography>

            <Grid
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "20px",
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "8px",
                  background: "#13181F",
                  gap: "5px",
                  height: "52px",
                }}
              >
                <AppleIcon sx={{ fontSize: "35px", color: "white" }} />
                <Div>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      textTransform: "capitalize",
                      color: "gray",
                      fontWeight: "600",
                    }}
                  >
                    Download On The
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      textTransform: "capitalize",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Apple Store
                  </Typography>
                </Div>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "8px",
                  //   border: "1px solid",
                  gap: "5px",
                  background: "#13181F",
                  height: "52px",
                }}
              >
                <GoogleIcon sx={{ fontSize: "35px", color: "white" }} />
                <Div>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      textTransform: "capitalize",
                      color: "gray",
                      fontWeight: "600",
                    }}
                  >
                    Download From
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      textTransform: "capitalize",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    Google Play
                  </Typography>
                </Div>
              </Button>
            </Grid>
          </Left>

          {/* Right starts */}

          <Right>
            <Grid xs={3} sx={{ height: "100%" }}>
              <Typography sx={{ fontWeight: "600" }}>Marketing</Typography>
              <ul>
                {Marketing.map((item) => {
                  return (
                    <li>
                      <a href="!#">{item}</a>
                    </li>
                  );
                })}
              </ul>
              <Typography sx={{ fontWeight: "600" }}>Travel</Typography>

              <ul>
                {Travel.map((item) => {
                  return (
                    <li>
                      <a href="!#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </Grid>

            <Grid xs={3} sx={{ height: "100%" }}>
              <Typography sx={{ fontWeight: "600" }}>Career</Typography>
              <ul>
                {Career.map((item) => {
                  return (
                    <li>
                      <a href="!#">{item}</a>
                    </li>
                  );
                })}
              </ul>
              <Typography sx={{ fontWeight: "600" }}>E-learning</Typography>
              <ul>
                {eLearning.map((item) => {
                  return (
                    <li>
                      <a href="!#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </Grid>
            <Grid xs={3} sx={{ height: "100%" }}>
              <Typography sx={{ fontWeight: "600" }}>E-commerce</Typography>
              <ul>
                {eCommerce.map((item) => {
                  return (
                    <li>
                      <a href="!#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </Grid>
            <Grid xs={3} sx={{ height: "100%" }}>
              <Typography sx={{ fontWeight: "600" }}>Common</Typography>
              <ul>
                {Common.map((item) => {
                  return (
                    <li>
                      <a href="!#">{item}</a>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Right>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderTop: "1px solid #E1E1E1",
            height: "10vh",
            padding: "20px",
          }}
        >
          <Grid
            xs={8}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: "10vh",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontSize: "13px", color: "gray" }}>
              © 2023. All rights reserved
            </Typography>
            <Typography>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Help Center
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Terms of Service
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Zone;
