import React from "react";
import "../Detail Hotel/DetailHotel.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RiHotelFill } from "react-icons/ri";
import Hotel_1 from "../../Assets/Hotel_2.jpg";
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
        <div className="hotel_ticket_detail">
          <div className="card w-75 mb-3">
            <div className="card-body">
              <h5 className="hotel_name card-title">
                <div className="hotel_name_section">
                  <RiHotelFill
                    style={{
                      height: "30px",
                      width: "30px",
                      marginRight: "10px",
                    }}
                  />{" "}
                  Hotel Eden Kuta
                </div>
              </h5>

              <div className="preview_hotel_ticket">
                <img
                  style={{ width: "22vw", height: "22vh" }}
                  src={Hotel_1}
                  alt="img"
                />
                <p className="detail_date card-text">
                  Jalan Kartika Plaza 42 Kuta, Kuta, Bali, Indonesia, 80361.
                </p>
              </div>

              <div className="estimation_stay">
                <p>Monday, 12 March 2023</p>
                <p>Tuesday, 13 March 2023</p>
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
                IDR 2.500.000
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
