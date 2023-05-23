import React from "react";
import "../Invoice/Invoice.css";
import Form from "react-bootstrap/Form";
import Footer from "../../Component/Footer/Footer";
import Hotel_1 from "../../Assets/Hotel_2.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Invoice = ({ name, email, phoneNumber, startDate, endDate }) => {
  return (
    <>
        <div className="navbarSection">
            <nav className="nav_dahboard">
            <button className="button_logout btn btn-danger">Logout</button>
            </nav>
        </div>

        <div className="invoice_section">
        <div className="detail_booking">
            <h3 className="title">Invoice</h3>
            <img
            style={{ width: "22vw", height: "22vh" }}
            src={Hotel_1}
            alt="img"
            />
        <div className="detail_item">
        <div className="detail_item__hotel">
            <span>Hotel Eden Kuta</span>
        </div>
        <div className="item">
            <span>Name:</span> {name}
        </div>
        <div className="item">
            <span>E-mail:</span> {email}
        </div>
        <div className="item">
            <span>Phone Number:</span> {phoneNumber}
        </div>
        <div className="item">
            <span>Start Date:</span> {startDate}
        </div>
        <div className="item">
            <span>End Date:</span> {endDate}
        </div>
        </div>
           <div className="button_wrapper">
              <button className="button_invoice" type="submit">
                NEXT
              </button>
            </div>
        </div>
        </div>
    </>
  );
};

export default Invoice;
