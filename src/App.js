import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingInformation from "./pages/BookingInformation";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/booking" element={<BookingInformation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
