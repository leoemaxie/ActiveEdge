"use client";

import React from "react";
import { Box } from "@mui/material";
import Excercises from "../components/Excercises";
import Search from "../components/Search";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <Box>
      <Banner />
      <Search />
      <Excercises />
    </Box>
  );
};

export default Home;
