import { Box, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Candidates from "./components/Part2/Candidates";
import Companies from "./components/Part3/Companies";
import Categories from "./components/Part4/Categories";
import Post from "./components/Part5/Post";
import Customer from "./components/Part6/Customer";
import OurClients from "./components/Part7/OurClients";
import Blog from "./components/Part8/Blog";
import Download from "./components/Part9/Download";
import Zone from "./components/Part10/Zone";
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
          <Grid item xs={12}>
            <Item>
              <Categories />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Post />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Customer />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <OurClients />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item>
              <Blog />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item>
              <Download />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item>
              <Zone />
            </Item>
          </Grid>
        </Grid>
      </CssBaseline>
    </Box>
  );
}
