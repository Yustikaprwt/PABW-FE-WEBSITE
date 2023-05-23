import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SearchFlight from "../Pages/Search Flight/SearchFlight";
import SearchHotel from "../Pages/Search Hotel/SearchHotel";
import FlightSchedule from "../Pages/Flight Schedule/FlightSchedule";
import Booking from "../Pages/Booking/Booking";
import Invoice from "../Pages/Invoice/Invoice";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search/flight" element={<SearchFlight />} />
        <Route path="/search/hotel" element={<SearchHotel />} />
        <Route path="/search/flight/schedule" element={<FlightSchedule />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
