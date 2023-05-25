import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/Login Page/LoginPage";
import Registration from "../Pages/Registration Page/Registration";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import FlightSchedule from "../Pages/Flight Schedule/FlightSchedule";
import HotelList from "../Pages/Hotel List/HotelList";
import DetailFlight from "../Pages/Detail Flight/DetailFlight";
import DetailHotel from "../Pages/Detail Hotel/DetailHotel";
import History from "../Pages/History/History";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/regist" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flight/schedule" element={<FlightSchedule />} />
        <Route path="/hotel/list" element={<HotelList />} />
        <Route path="/flight/detail" element={<DetailFlight />} />
        <Route path="/hotel/detail" element={<DetailHotel />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
