import React from "react";
import { keyframes, styled } from "@mui/material/styles";
import { Paper, Grid, Typography, Button } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Badge from "@mui/material/Badge";
import { Badge as BaseBadge, badgeClasses } from "@mui/base/Badge";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import TitleBox from "./Title/Title";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const rotateCircle = keyframes`
    0%{
        transform: rotate(90deg);
    }

    50%{
        transform: rotate(270deg);

    }

    100%{
        transform: rotate(360deg);

    }
`;

const Badge = styled(BaseBadge)(
  ({ theme }) => `
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 20px;
    list-style: none;
    position: relative;
    display: inline-block;
    line-height: 1;
  
    & .${badgeClasses.badge} {
      z-index: auto;
      position: absolute;
      top: 22px;
      right: 0;
      min-width: 18px;
      height: 18px;
      padding: 0 6px;
      color: #006C9C;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;
      white-space: nowrap;
      text-align: center;
      border-radius: 6px;
      background: rgba(0, 184, 217, 0.16);
      box-shadow: 0px 4px 6x ${
        theme.palette.mode === "dark" ? grey[900] : grey[300]
      };
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    }
    `
);

const Navbar = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        // border: "1px solid red",
        height: "100vh",
        background:
          "linear-gradient(to bottom, #2E161F 0%, #152437 100%, #341823 100%);",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Item
        elevation={0}
        xs={8}
        sx={{
          display: "flex",
          flexDirection: "row",
          // alignItems: "center",
          justifyContent: "center",
          //   border: "1px solid green",
          background: "transparent",
          width: "60%",
          height: "100px",
          position: "sticky",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "19px",
            fontWeight: "600",
            letterSpacing: "1px",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            width: "20%",
          }}
          pt={2}
        >
          <Badge
            badgeContent={"V2.4.0"}
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
                left: "57px",
                top: "36px",
              }}
            />
          </Badge>
        </Typography>

        <Typography
          sx={{
            width: "60%",
            // border: "1px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Button
            sx={{
              fontSize: "14px",
              fontFamily: "Helvetica,Arial,sans-serif",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              fontSize: "14px",
              fontFamily: "Helvetica,Arial,sans-serif",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Components
          </Button>
          <Button
            sx={{
              fontSize: "14px",
              fontFamily: "Helvetica,Arial,sans-serif",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Pages <ExpandMoreIcon />
          </Button>
          <Button
            sx={{
              fontSize: "14px",
              fontFamily: "Helvetica,Arial,sans-serif",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Docs
          </Button>
        </Typography>

        <Typography
          sx={{
            width: "20%",
            display: "flex",
          }}
        >
          <Button sx={{ color: "white " }}>
            {" "}
            <SearchIcon />
          </Button>
          <Button sx={{ color: "white " }}>
            <SettingsIcon
              sx={{ animation: `${rotateCircle} 10s linear infinite` }}
            />
          </Button>

          <Button
            sx={{
              fontSize: "14px",
              fontFamily: "Helvetica,Arial,sans-serif",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "600",
            }}
          >
            Buy Now
          </Button>
        </Typography>
      </Item>
      <TitleBox></TitleBox>
    </Grid>
  );
};

export default Navbar;
