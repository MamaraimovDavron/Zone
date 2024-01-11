import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Brand from "./Brand";

const BrandBox = styled.div`
  /* border: 1px solid; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Companies = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          //   border: "1px solid red",
          background: "#F4F6F8",
          //   height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            // border: "1px solid red",
            // alignItems: "center",
            justifyContent: "center",
            gap: "80px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontFamily: "sans-serif",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            Top Companies
          </Typography>

          <BrandBox>
            <Button variant="text" sx={{ color: "black" }}>
              <NavigateBeforeIcon />
            </Button>

            <BrandBox>
              <Brand
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_11.png"
                jobs="111 jobs"
                info="Heidenreich, Stokes and Parker"
              />
              <Brand
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_12.png"
                jobs="112 jobs"
                info="Pagac and Sons"
              />
              <Brand
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_1.png"
                jobs="101 jobs"
                info="Lueilwitz and Sons"
              />
              <Brand
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_2.png"
                jobs="101 jobs"
                info="Gleichnur, Mueller and Tromp"
              />
              <Brand
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_3.png"
                jobs="103 jobs"
                info="Nikolaus-Leuschke"
              />
            </BrandBox>

            <Button variant="text" sx={{ color: "black" }}>
              <NavigateNextIcon />
            </Button>
          </BrandBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Companies;
