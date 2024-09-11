import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/style.css";
import LogoAdmin from "../../../assets/img/logoNavbar.png";
import { IoIosCloseCircle } from "react-icons/io";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function showCustomAlert() {
    const modal = document.getElementById("customAlert");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminPassword = "123";
    const adminEmail = "gasar";

    if (email === adminEmail) {
      if (password === adminPassword) {
        localStorage.setItem("adminPassword", password);
        navigate("/admin/dashboard");
      } else {
        showCustomAlert();
      }
    } else {
      showCustomAlert();
    }
  };

  return (
    <>
      <div id="customAlert" class="modal">
        <div class="modal-content">
          <span class="close">
            <IoIosCloseCircle />
          </span>
          <p>Email or Password is not correct!</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="form">
            <div className="admin_logo">
              <img src={LogoAdmin} alt="logo merit brand" />
            </div>

            <form
              onSubmit={handleSubmit}
              id="login_form"
              className="loginForm vodka_btn"
            >
              <div className="form-group">
                <input
                  autoComplete="off"
                  id="login-username"
                  type="text"
                  name="loginUsername"
                  required
                  value={email}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  autoComplete="off"
                  id="login-password"
                  type="password"
                  name="loginPassword"
                  required
                  value={password}
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-button">
                <input
                  type="submit"
                  id="login"
                  className="admin_btn"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
