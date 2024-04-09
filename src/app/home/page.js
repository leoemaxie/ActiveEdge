import { Box } from "@mui/material";
import Excercises from "../../components/Excercises";
import Search from "../../components/Search";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Box>
      <Banner />
      <Search />
      <Excercises />
    </Box>
  );
}
