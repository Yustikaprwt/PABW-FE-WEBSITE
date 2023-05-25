import React from "react";
import "../History/History.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { GiAirplaneDeparture } from "react-icons/gi";
import Footer from "../../Component/Footer/Footer";

const History = () => {
  return (
    <>
      <div className="navbar_history_page">
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
              <h5 className="airplane_name card-title">
                <div className="airplane_name_section">
                  <GiAirplaneDeparture
                    style={{
                      height: "30px",
                      width: "30px",
                      marginRight: "10px",
                    }}
                  />
                  Super Air Jet
                </div>
              </h5>

              <p className="detail_date card-text">Monday, 12 March 2023</p>

              <div className="estimation_flight_time">
                <p>04:45 WIB - Soekarno Hatta</p>
                <p>O8.10 WIB - Sultan Hasanuddin</p>
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
                <button
                  className="refund_button"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Refund
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;