import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid; */
  border-radius: 10px;
  margin-top: 20px;
  input {
    width: 480px;
    border-radius: 10px 0px 0 10px;
    border: none;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    &::-webkit-input-placeholder {
      padding-left: 20px;
    }
  }
`;

const Download = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          background: "#FEE9D1",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <Grid
            xs={6}
            sx={{
              //   border: "1px solid red",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                // fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "40px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              Download App
            </Typography>

            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "50%",
              }}
            >
              Now finding the new job just got even easier with our new app!
            </Typography>

            <Grid
              xs={8}
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
                  //   border: "1px solid",
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
          </Grid>

          <Grid
            xs={6}
            sx={{
              //   border: "1px solid red",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",

              ".zone": { width: "70%", marginTop: "80px" },
            }}
          >
            <img
              src="https://zone-ui.vercel.app/assets/images/career/career_download_app.png"
              alt=""
              className="zone"
            />
          </Grid>
        </Grid>

        <Grid
          xs={12}
          sx={{
            height: "40vh",
            background: "#31363C",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <Typography
            sx={{ fontSize: "50px", fontWeight: "600", color: "white" }}
          >
            Get The Right Job For You
          </Typography>
          <Typography
            sx={{ fontSize: "17px", fontWeight: "500", color: "white" }}
          >
            Subscribe to get updated on latest and relevant career opportunities
          </Typography>
          <Input>
            <input type="email" placeholder="Enter Your Email" />
            <Button
              sx={{
                textTransform: "capitalize",
                color: "white",
                fontSize: "14px",
                padding: "15px 20px",
                background: "#FA541C",
                borderRadius: "0 10px 10px 0px",
                outline: "none",
                border: "none",
              }}
            >
              Subscribe
            </Button>
          </Input>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Download;
