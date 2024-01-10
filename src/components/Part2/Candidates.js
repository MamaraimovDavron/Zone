import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import React from "react";
import Steps from "./Steps";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Cards from "./Cards";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const StepBox = styled.div`
  /* border: 1px solid; */
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DivTop = styled.div`
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  flex-direction: row;
`;

const CardBox = styled.div`
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  .top {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  .bottom {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
`;

export default function Candidates({ ...props }) {
  return (
    <Box>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px",
            gap: "50px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "12px",
              fontWeight: "600",
              color: "gray",
            }}
          >
            FOR CANDIDATES
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontFamily:
                " '__Barlow_92d964','__Barlow_Fallback_92d964',Helvetica,Arial,sans-serif",
              fontWeight: "700",
              fontSize: "45px",
            }}
          >
            Explore Thousands of Jobs
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: "15px",
              width: "40%",
              textAlign: "center",
              color: "gray",
            }}
          >
            Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
            Morbi mattis ullamcorper velit.
          </Typography>

          <StepBox>
            <Steps
              icon="ListAltIcon"
              step="STEP 1"
              text="Create an account"
              info="Nunc nonummy metus. Donec elit libero."
            ></Steps>
            <Steps
              icon="ListAltIcon"
              step="STEP 2"
              text="Complete your profile"
              info="Nunc nonummy metus. Donec elit libero."
            ></Steps>
            <Steps
              icon="ScreenSearchDesktopIcon"
              step="STEP 3"
              text="Search your job"
              info="Nunc nonummy metus. Donec elit libero."
            ></Steps>
          </StepBox>

          <Button
            variant="contained"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "5px",
              background: "#212B36",
              borderRadius: "8px",
              padding: "12px 16px",
              ":hover": {
                background: "gray",
              },
            }}
          >
            <CloudUploadIcon />
            Upload Your CV
          </Button>
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px",
            gap: "60px",
          }}
        >
          <DivTop>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                width: "40%",
                fontSize: "12px",
                color: "gray",
                fontFamily: "Arial, sans-serif",
                fontWeight: "600",
                display: "flex",
              }}
            >
              FEATURED JOBS
            </Typography>

            <Typography
              variant="h3"
              component="h3"
              sx={{
                width: "60%",
                fontSize: "25px",
                fontFamily: "Arial, sans-serif",
                fontWeight: "600",
              }}
            >
              Jobs available apply to Editorial Specialist, Account Manager,
              Human Resources Specialist and more!
            </Typography>
          </DivTop>

          <CardBox>
            <div className="top">
              <Cards
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_7.png"
                job="Data Scientist"
                address="Altenwerth, Medhurst and Roberts"
                location="Armenia"
                yearExp="7 Year Exp"
                freelance="Freelance"
                comp="Competitive"
                user="Intern/Student"
              />
              <Cards
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_8.png"
                job="Human Resources Coordinator"
                address="Raynor Group"
                location="Angola"
                yearExp="8 Year Exp"
                freelance="Part Time"
                comp="$12,000"
                user="Manager"
              />
              <Cards
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_9.png"
                job="Accountant"
                address="Mraz, Donnelly and Collins"
                location="Antarctica"
                yearExp="9 Year Exp"
                freelance="Full Time"
                comp="$12,000"
                user="No Experience"
              />
            </div>
            <div className="bottom">
              <Cards
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_10.png"
                job="Customer Service Representative"
                address="Padbergi-Bailey"
                location="Argentina"
                yearExp="10 Year Exp"
                freelance="Part Time"
                comp="Competitive"
                user="Manager"
              />
              <Cards
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_11.png"
                job="Nurse"
                address="Heidenreich, Stokes and Parker"
                location="American Samoa"
                yearExp="11 Year Exp"
                freelance="Freelance"
                comp="$12,000"
                user="Intern/Student"
              />
              <Cards
                imgUrl="https://zone-ui.vercel.app/assets/images/company/company_12.png"
                job="Product Manager"
                address="Pagac and Sons"
                location="Austria"
                yearExp="12 Year Exp"
                freelance="Part Time"
                comp="$12,000"
                user="Manager"
              />
            </div>
            <Button
              variant="outlined"
              sx={{
                width: "15%",
                padding: "10px",
                border: "1px solid black",
                color: "black",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                fontWeight: "600",
                "&:hover": {
                  border: "2px solid",
                  background: "#C8C8C8",
                },
              }}
            >
              View All Jobs <KeyboardArrowRightIcon />
            </Button>
          </CardBox>
        </Grid>
      </Grid>
    </Box>
  );
}
