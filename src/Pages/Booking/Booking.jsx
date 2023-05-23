import React, { useState } from "react";
import "../Booking/Booking.css";
import Form from "react-bootstrap/Form";
import Footer from "../../Component/Footer/Footer";
import Hotel_1 from "../../Assets/Hotel_2.jpg";
import { Link } from "react-router-dom";
import Invoice from "../Invoice/Invoice.jsx";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data booking yang telah diisi
    // Misalnya, kirim data ke server atau lakukan proses lainnya
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    setShowInvoice(true);
  };

  return (
    <>
      <div className="navbarSection">
        <nav className="nav_dahboard">
          <button className="button_logout btn btn-danger">Logout</button>
        </nav>
      </div>

      {!showInvoice ? (
        <div className="form_booking_section">
          <div className="form_booking">
            <h3 className="booking_title_form">Booking Detail</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Label className="label_field_booking">Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
              />

              <Form.Label className="label_field_booking">E-mail</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={handleEmailChange}
              />

              <Form.Label className="label_field_booking">
                Phone Number
              </Form.Label>
              <Form.Control
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />

              <Form.Label className="label_field_booking">
                Start Date
              </Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
              />

              <Form.Label className="label_field_booking">End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
              />

              <div className="button_wrapper">
                <button className="button_booking" type="submit">
                  SUBMIT
                </button>
              </div>
            </Form>
          </div>
          <div className="detail_booking_section">
            <div className="detail_booking">
              <h3 className="booking_title_form">Booking Detail</h3>
              <img
                style={{ width: "22vw", height: "22vh" }}
                src={Hotel_1}
                alt="img"
              />
              <div className="detail_item">
                <div className="item">Nama Hotel</div>
                <div className="item">Hotel Eden Kuta</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="detail_booking_section">
          <div className="detail_booking">
            <h3 className="booking_title_form">Booking Detail</h3>
            <img
              style={{ width: "22vw", height: "22vh" }}
              src={Hotel_1}
              alt="img"
            />
            <div className="detail_item">
              <div className="item">Nama Hotel: Hotel Eden Kuta</div>
              <div className="item">Name: {name}</div>
              <div className="item">E-mail: {email}</div>
              <div className="item">Phone Number: {phoneNumber}</div>
              <div className="item">Start Date: {startDate}</div>
              <div className="item">End Date: {endDate}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
