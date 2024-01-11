import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Candidates from "./components/Part2/Candidates";
import Companies from "./components/Part3/Companies";
// import Badge from "@mui/material/Badge";

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
        <Grid container>
          <Navbar />
          <Grid item xs={12}>
            <Item>
              <Candidates />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Companies />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </CssBaseline>
    </Box>
  );
}
