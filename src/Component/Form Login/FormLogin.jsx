import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import profile from "../../Assets/profile.png";
import "../Form Login/FormLogin.css";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Silahkan isi data login terlebih dahulu.");
      return;
    }

    if (password.length < 5) {
      alert("Password harus terdiri dari minimal 5 karakter.");
      return;
    }
    try {
      const response = await axios.post(
        "https://bbd89567-4a06-46ae-8f03-cb1ea6652289.mock.pstmn.io/login",
        {
          username,
          password,
        }
      );

      // Process the response data
      const { token } = response.data;
      console.log("Login successful!");
      console.log("Token:", token);

      // You can perform additional actions after successful login
    } catch (error) {
      console.error("Login failed:", error.message);
    }

    setTimeout(() => {
      alert("Login berhasil!");
      navigate("/dashboard");
    }, 1000);
  };

  //end....

  const initialValue = {
    username: "",
    password: "",
  };

  const [datas, setDatas] = useState(initialValue);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Hindari reload halaman

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const response = await axios.post("{{baseUrl}}/login", datas); // Ganti {{baseUrl}} dengan URL endpoint login yang valid
        console.log(response.data); // Tampilkan respons dari API di konsol

        // Lakukan tindakan selanjutnya, seperti menyimpan token akses ke dalam state atau menjalankan tindakan navigasi ke halaman berikutnya
      } catch (error) {
        console.log(error); // Tampilkan error di konsol
      }

      setDatas(initialValue);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDatas((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(`Input ${name}: ${value}`);
  };

  const navigate = useNavigate();
  const HalamanRegistrasi = () => {
    navigate("/regist");
  };

  return (
    <body className="body-login">
      <section>
        <div className="login">
          <div className="col">
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleFormSubmit}
            >
              <div className="image_profile_login">
                <img
                  src={profile}
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </div>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="masukan username"
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="masukan password"
                pattern=".{5,}"
                onChange={handleInputChange}
              />
              <button className="btn button_login_akun btn-login" type="submit">
                MASUK
              </button>{" "}
              {/* Tambahkan atribut type="submit" */}
              <p style={{ display: "flex", justifyContent: "center" }}>
                Belum Punya Akun?{" "}
                <a onClick={HalamanRegistrasi} className="btn-regis">
                  {" "}
                  BUAT AKUN{" "}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
};

export default FormLogin;
