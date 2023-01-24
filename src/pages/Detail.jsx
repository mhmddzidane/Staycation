import React from "react";
import Room from "../components/Detail/Room";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AppTemplate from "../components/Template/AppTemplate";

const Detail = () => {
  return (
    <div>
      <Navbar />
      <AppTemplate>
        <Room />
      </AppTemplate>
      <Footer />
    </div>
  );
};

export default Detail;
