import React from "react";
import "../Hotel List/HotelList.css";
import { BiWallet } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import Hotel_1 from "../../Assets/Hotel_2.jpg";
import Hotel_2 from "../../Assets/Hotel_3.jpg";
import Hotel_3 from "../../Assets/Hotel_4.jpg";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

const HotelList = () => {
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

        <div className="hotel_list_table">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col" className="label_hotel_list">
                  Hotel Preview
                </th>
                <th scope="col" className="label_hotel_list">
                  Hotel Name
                </th>
                <th scope="col" className="label_hotel_list">
                  City
                </th>
                <th scope="col" className="label_hotel_list">
                  Rating
                </th>
                <th scope="col" className="label_hotel_list">
                  Price
                </th>
                <th scope="col" className="label_hotel_list">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="option_hotel_list">
                <td>
                  <img src={Hotel_1} alt="img" />
                </td>

                <td>Eden Hotel</td>
                <td>Bali</td>
                <td>5.0</td>
                <td>IDR 2.500.000</td>
                <td>
                  <Link to="/hotel/detail" className="btn button_detail_hotel">
                    Detail
                  </Link>
                </td>
              </tr>
              <tr className="option_hotel_list">
                <td>
                  <img src={Hotel_2} alt="img" />
                </td>
                <td>Kuta Paradiso</td>
                <td>Bali</td>
                <td>4.3</td>
                <td>IDR 1.650.000</td>
                <td>
                  <button className="btn button_detail_hotel">Detail</button>
                </td>
              </tr>
              <tr className="option_hotel_list">
                <td>
                  <img src={Hotel_3} alt="img" />
                </td>
                <td>The Flora Kuta Bali</td>
                <td>Bali</td>
                <td>4.8</td>
                <td>IDR 2.100.000</td>
                <td>
                  <button className="btn button_detail_hotel">Detail</button>
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

export default HotelList;
