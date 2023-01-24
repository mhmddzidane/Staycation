import React from "react";
import Footer from "../components/Footer";
import Backyard from "../components/Home/Backyard";
import Family from "../components/Home/Family";
import Header from "../components/Home/Header";
import LivingRoom from "../components/Home/LivingRoom";
import MostpPicked from "../components/Home/MostpPicked";
import Kitchen from "../components/Kitchen";
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
        <LivingRoom />
        <Kitchen />
        <Family />
      </AppTemplate>
      <Footer />
    </>
  );
};

export default Home;
