import React from "react";
import "../Detail Hotel/DetailHotel.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Footer from "../../Component/Footer/Footer";

const DetailHotel = () => {
  return (
    <>
      <div className="navbarSection">
        <nav className="nav_dahboard">
          <button className="button_logout btn btn-danger">Logout</button>
          <ul>
            <li>
              <BiWallet className="icon_navbar_login" />
            </li>
            <li>
              <SlBasket className="icon_navbar_login" />
            </li>
            <li>
              <CgProfile className="icon_navbar_login" />
            </li>
          </ul>
        </nav>
        <div className="booking_flight_card">
          <div className="card w-75 mb-3">
            <div className="card-body">
              <h5 className="airplane_name card-title">Hotel Eden Kuta</h5>

              <div>
                <p className="detail_date card-text">
                  Jalan Kartika Plaza 42 Kuta, Kuta, Bali, Indonesia, 80361.
                </p>
              </div>

              <div className="estimation_flight_time">
                <p>04:45 WIB - Soekarno Hatta</p>
                <p>O8.10 WIB Sultan Hasanuddin</p>
              </div>

              <h3
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#1b68da",
                  marginTop: "30px",
                }}
              >
                IDR 968.100
              </h3>

              <div className="d-flex justify-content-end mt-3">
                <button className="booking_button">Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailHotel;
