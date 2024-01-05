import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
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
        <Grid container spacing={1}>
          <Navbar />
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
