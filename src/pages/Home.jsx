import React from "react";
import Header from "../components/Home/Header";
import Navbar from "../components/Navbar";
import AppTemplate from "../components/Template/AppTemplate";

const Home = () => {
  return (
    <>
      <Navbar />
      <AppTemplate>
        <Header />
      </AppTemplate>
    </>
  );
};

export default Home;
