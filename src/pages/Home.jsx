import React from "react";
import Backyard from "../components/Home/Backyard";
import Header from "../components/Home/Header";
import MostpPicked from "../components/Home/MostpPicked";
import Navbar from "../components/Navbar";
import AppTemplate from "../components/Template/AppTemplate";

const Home = () => {
  return (
    <>
      <Navbar />
      <AppTemplate>
        <Header />
        <MostpPicked />
        <Backyard />
      </AppTemplate>
    </>
  );
};

export default Home;
