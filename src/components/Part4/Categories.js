import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Category from "./Category";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Img from "./Img";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid red; */
  width: 100%;
  gap: 20px;
`;

const Connection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 30%;
  height: 40vh;
  gap: 15px;
`;

const ImgBox = styled.div`
  /* border: 1px solid; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  position: absolute;
  height: 44vh;
  left: 600px;
  padding: 20px;
  gap: 20px;
`;

const data1 = [
  {
    icon: <CurrencyExchangeIcon className="icon" />,
    skill: "Software Engineer",
    jobs: "497 jobs",
  },

  {
    icon: <Diversity2Icon className="icon" />,
    skill: "Marketing Manager",
    jobs: "763 jobs",
  },

  {
    icon: <PriceChangeIcon className="icon" />,
    skill: "Financial Analyst",
    jobs: "684 jobs",
  },
  {
    icon: <DesignServicesIcon className="icon" />,
    skill: "Graphical Designer",
    jobs: "451 jobs",
  },
];

const data2 = [
  {
    icon: <ReceiptIcon className="icon" />,
    skill: "Sales Representative",
    jobs: "433 jobs",
  },

  {
    icon: <InterpreterModeIcon className="icon" />,
    skill: "Project Manager",
    jobs: "463 jobs",
  },

  {
    icon: <MedicationLiquidIcon className="icon" />,
    skill: "Data Scientist",
    jobs: "951 jobs",
  },
  {
    icon: <AccountBalanceIcon className="icon" />,
    skill: "Human Resources Coordinator",
    jobs: "194 jobs",
  },
];

const imgList = [
  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/travel/travel_1.jpg",
    address: "Andorra",
    jobs: "497 Jobs",
  },

  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/travel/travel_2.jpg",
    address: "United Arab Emirates",
    jobs: "763 Jobs",
  },

  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/travel/travel_3.jpg",
    address: "Afghanistan",
    jobs: "684 Jobs",
  },
  {
    imgUrl: "https://zone-ui.vercel.app/assets/images/travel/travel_4.jpg",
    address: "Antigua and Barbuda",
    jobs: "451 Jobs",
  },
];

const Categories = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        padding: "120px 0",
        overflowX: "hidden",
      }}
    >
      <Grid
        container
        spacing={2}
        xs={8}
        sx={{
          //   border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              fontSize: "45px",
              paddingBottom: "60px",
            }}
          >
            Hot Categories
          </Typography>
        </Grid>

        <Grid item sx={{ width: "100%" }}>
          <CategoryBox>
            {data1.map((item) => {
              return (
                <Category
                  icon={item.icon}
                  skill={item.skill}
                  jobs={item.jobs}
                />
              );
            })}
          </CategoryBox>
        </Grid>

        <Grid item sx={{ width: "100%" }}>
          <CategoryBox>
            {data2.map((item) => {
              return (
                <Category
                  icon={item.icon}
                  skill={item.skill}
                  jobs={item.jobs}
                />
              );
            })}
          </CategoryBox>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            sx={{
              margin: "50px",
              border: "1px solid gray",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              borderRadius: "8px",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: "15px",
              "&:hover": {
                border: "1px solid black",
                background: "#EDEFF9",
              },
            }}
          >
            View All Categories <KeyboardArrowRightIcon />
          </Button>
        </Grid>

        <Grid
          item
          sx={{
            width: "100%",
            gap: "50px",
            position: "relative",
            display: "flex",
            marginTop: "100px",
          }}
        >
          <Connection>
            <Typography
              sx={{ fontSize: "50px", fontFamily: "arial", fontWeight: "600" }}
            >
              Global Connections
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontFamily: "arial", color: "gray" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              maiores nemo laborum? illum aliquam cum nemo quas deleniti?
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                borderRadius: "8px",
                background: "black",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              View All Jobs <KeyboardArrowRightIcon />
            </Button>
          </Connection>
          <ImgBox>
            {imgList.map((item) => {
              return (
                <Img
                  imgUrl={item.imgUrl}
                  address={item.address}
                  jobs={item.jobs}
                />
              );
            })}
          </ImgBox>
        </Grid>

        <Grid
          sx={{
            width: "100%",
            display: "flex",
            padding: "80px",
            justifyContent: "flex-end",
            // border: "1px solid",
          }}
        >
          <Button sx={{ color: "black" }}>
            <NavigateBeforeIcon />
          </Button>

          <Button>
            <NavigateNextIcon sx={{ color: "black" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categories;
