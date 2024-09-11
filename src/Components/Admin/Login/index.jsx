import React from "react";
import "../Login/style.css";
import LogoAdmin from "../../../assets/img/logo.png"

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">

            <div className="content_logo">
                <img src={LogoAdmin} alt="" />
            </div>
          <div className="form">
            <form method="post" id="login_form">
              <div className="form-group">
                <input
                  autoComplete="off"
                  id="login-username"
                  type="text"
                  name="loginUsername"
                  required
                  //   value={email}
                  placeholder="email"
                  //   onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  autoComplete="off"
                  id="login-password"
                  type="password"
                  name="loginPassword"
                  required
                  //   value={password}
                  placeholder="password"
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-button">
                <input type="submit" id="login" className="btn" value="Login" />
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Login;
