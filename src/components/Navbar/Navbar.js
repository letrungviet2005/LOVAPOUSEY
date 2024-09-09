import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import logo from "../../assets/images/logo.png";
import style from "./Navbar.module.scss";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
const cx = classNames.bind(style);
function Navbar() {
  return (
    <div className={cx("navbar")}>
      <div className={cx("menu")}>
        <div className={cx("logo")}>
          <img src={logo} alt="logo" />
        </div>
        <div className={cx("menu-list")}>
          <Link to="/" className={cx("menu-item")}>
            Home
          </Link>
          <Link to="/Products" className={cx("menu-item")}>
            Portfolio
          </Link>
          <Link to="/Contact" className={cx("menu-item")}>
            Contact
          </Link>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
