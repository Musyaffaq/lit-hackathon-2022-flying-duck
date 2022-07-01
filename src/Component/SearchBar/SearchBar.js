import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { privacyLawData } from "../../utilities/privacyLawData";
import { useDispatch, useSelector } from "react-redux";
import { setSearched, setHasSearch } from "../../redux/searchedLawSlice";
import classes from "./SearchBar.module.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.searched);

  const requestSearch = (searchValue) => {
    return privacyLawData.filter((data) => {
      return data.question.toLowerCase().includes(searchValue.toLowerCase());
    });
  };

  const searchHandler = (e) => {
    const val = e.target.value;
    const filterData = requestSearch(val);
    dispatch(setSearched(filterData));
    if (val.length > 0) dispatch(setHasSearch(true));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          <div className={classes.title}>
            <strong>Please select the country you wish to compare</strong>
          </div>
        </Typography>
        <Search onChange={searchHandler}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </Box>
  );
}
