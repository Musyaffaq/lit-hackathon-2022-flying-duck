import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavValue } from "../../redux/navTabSlice";

export default function NavTabs() {
  const { value } = useSelector((state) => state.navTab);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event, newValue) => {
    dispatch(setNavValue(newValue));
  };

  React.useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/compare");
    else if (value === 2) history.push("/lawyers");
  }, [value, history]);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Home" />
        <Tab label="Compare" />
        <Tab label="Find Lawyers" />
      </Tabs>
    </Box>
  );
}
