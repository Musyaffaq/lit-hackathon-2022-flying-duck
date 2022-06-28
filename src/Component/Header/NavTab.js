import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

export default function NavTabs() {
  const { value } = useSelector((state) => state.navTab);
  const dispatch = useDispatch();
  const history = useHistory();

  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#33eb91",
        main: "#00e676",
        dark: "#00a152",
        contrastText: "#000",
      },
    },
  });

  const handleChange = (event, newValue) => {
    dispatch(setNavValue(newValue));
  };

  React.useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/compare");
    else if (value === 2) history.push("/lawyers");
  }, [value, history]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab sx={{ color: "white" }} label="Home" />
          <Tab sx={{ color: "white" }} label="Compare" />
          <Tab sx={{ color: "white" }} label="Find Lawyers" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
