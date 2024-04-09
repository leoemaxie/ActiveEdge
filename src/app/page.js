"use client";

import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-[#dddddd] my-0 px-5">
      <Box
        className="bg-white p-5"
        width="400px"
        sx={{ width: { xl: "1488px" } }}
        m="auto"
      >
        <Navbar />
        <Footer />
      </Box>
    </div>
  );
}
