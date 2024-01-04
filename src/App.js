import { Box, Paper, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid red",
              height: "100vh",
              background:
                "linear-gradient(to bottom, #2E161F 0%, #152437 100%, #341823 100%);",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item
              elevation={0}
              xs={8}
              sx={{
                border: "1px solid green",
                background: "inherit",
                width: "60%",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  color: "white",
                  fontSize: "19px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  // justifyContent: "center",
                  border: "1px solid red",
                }}
                pt={2}
              >
                <Badge
                  badgeContent={"V2.4.0"}
                  color="secondary"
                  sx={{
                    // border: "1px solid white",
                    paddingRight: "25px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // border: "1px solid red",
                    position: "relaitve",
                  }}
                >
                  ZONE{" "}
                  <FiberManualRecordIcon
                    sx={{
                      color: "#FA541C",
                      fontSize: "12px",
                      position: "absolute",
                      left: "57px",
                      top: "10px",
                    }}
                  />
                </Badge>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </CssBaseline>
    </Box>
  );
}
