import React from "react";
import { useNavigate } from "react-router-dom";
import "../Form Regist/FormRegist.css";
import { Form } from "react-bootstrap";
import "../Form Regist/FormRegist.css";
import { Link } from "react-router-dom";

const FormRegistrasi = () => {
  const navigate = useNavigate();
  const HalamanLogin = () => {
    navigate("/login");
  };

  return (
    <body className="body-regist">
      <section>
        <div className="registrasi">
          <div className="col">
            <form id="form" className="flex flex-col">
              <h2 className="regis-title">BUAT AKUN</h2>
              <span>SILAHKAN ISI FORMULIR DIBAWAH</span>
              <input type="text" placeholder="Username" />
              <Form.Select id="disabledSelect">
                <option>Mitra</option>
                <option>Customer</option>
              </Form.Select>
              <input type="text" placeholder="No Handphone" />
              <input type="password" placeholder="Buat Password" />
              <input type="password" placeholder="Konfirmasi Password" />

              <Link to="/login" className="btn button_akun_regist btn-regis">DAFTAR</Link>
              <p style={{ display: "flex", justifyContent: "center" }}>
                Sudah Punya Akun?{" "}
                <a onClick={HalamanLogin} className="btn-login">
                  {" "}
                  LOGIN{" "}
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </body>
  );
};

export default FormRegistrasi;
