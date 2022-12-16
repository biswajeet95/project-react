import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/registration");
    localStorage.removeItem("login");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
            <div className="header-cnt-top-l">
              <ul className="flex top-links align-center">
                <li>
                  {/* dummy links */}
                  <Link to="/">Seller Center</Link>
                </li>
                <li className="vert-line"></li>
              </ul>
            </div>
            <div className="header-cnt-top-r">
              <ul className="top-links flex align-center">
                <li className="vert-line"></li>
                <li>
                  <Link to="/chartPage">
                    <span className="top-link-itm-txt">Chart Page</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/">
                    <span className="top-link-itm-txt" onClick={handleLogout}>
                      Logout
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="header-cnt-bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
