import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingInformation from "./pages/BookingInformation";
import Complete from "./pages/Complete";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/booking" element={<BookingInformation />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/complete" element={<Complete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
