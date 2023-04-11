import React from "react";
import "../Flight Schedule/FlightSchedule.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";

const FlightSchedule = () => {
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

        <div className="flight_schedule_table">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col" className="label_flight_schedule">
                  Airline
                </th>
                <th scope="col" className="label_flight_schedule">
                  Destination
                </th>
                <th scope="col" className="label_flight_schedule">
                  Flight Date
                </th>
                <th scope="col" className="label_flight_schedule">
                  Flight Time
                </th>
                <th scope="col" className="label_flight_schedule">
                  Flight Duration
                </th>
                <th scope="col" className="label_flight_schedule">
                  Price
                </th>
                <th scope="col" className="label_flight_schedule">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="option_destination_schedule">
                <th scope="row" style={{ fontWeight: "300", border: "none" }}>
                  Lion Air
                </th>
                <td>Jakarta - Makassar</td>
                <td>Monday, 12 March 2023</td>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button className="btn button_detail_flight_schedule">
                    Detail
                  </button>
                </td>
              </tr>
              <tr className="option_destination_schedule">
                <th scope="row" style={{ fontWeight: "300", border: "none" }}>
                  Super Air Jet
                </th>
                <td>Jakarta - Makassar</td>
                <td>Monday, 12 March 2023</td>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <Link
                    to="/flight/detail"
                    className="btn button_detail_flight_schedule"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
              <tr className="option_destination_schedule">
                <th scope="row" style={{ fontWeight: "300", border: "none" }}>
                  Garuda Indonesia
                </th>
                <td>Jakarta - Makassar</td>
                <td>Monday, 12 March 2023</td>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button className="btn button_detail_flight_schedule">
                    Detail
                  </button>
                </td>
              </tr>
              <tr className="option_destination_schedule">
                <th scope="row" style={{ fontWeight: "300", border: "none" }}>
                  Citilink
                </th>
                <td>Jakarta - Makassar</td>
                <td>Monday, 12 March 2023</td>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button className="btn button_detail_flight_schedule">
                    Detail
                  </button>
                </td>
              </tr>
              <tr className="option_destination_schedule">
                <th scope="row" style={{ fontWeight: "300", border: "none" }}>
                  Batik Air
                </th>
                <td>Jakarta - Makassar</td>
                <td>Monday, 12 March 2023</td>
                <td>04:45 - 08.10 WIB</td>
                <td>2 hours 25 minute</td>
                <td>IDR 968.100</td>
                <td>
                  <button className="btn button_detail_flight_schedule">
                    Detail
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FlightSchedule;
