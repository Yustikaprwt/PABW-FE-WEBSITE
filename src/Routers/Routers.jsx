import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
// import SearchFlight from "../Pages/Search Flight/SearchFlight";
// import SearchHotel from "../Pages/Search Hotel/SearchHotel";
import FlightSchedule from "../Pages/Flight Schedule/FlightSchedule";
import HotelList from "../Pages/Hotel List/HotelList";
import DetailFlight from "../Pages/Detail Flight/DetailFlight";
import DetailHotel from "../Pages/Detail Hotel/DetailHotel";
import BasketPage from "../Pages/Basket Page/BasketPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />        
        <Route path="/flight/schedule" element={<FlightSchedule />} />
        <Route path="/hotel/list" element={<HotelList />} />
        <Route path="/flight/detail" element={<DetailFlight />} />
        <Route path="/hotel/detail" element={<DetailHotel />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
