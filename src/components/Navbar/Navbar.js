import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import classNames from "classnames/bind";
import logo from "../../assets/images/logo.png";
import style from "./Navbar.module.scss";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";

const cx = classNames.bind(style);

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={cx("navbar")}>
      <div className={cx("menu")}>
        <div className={cx("logo")}>
          <img src={logo} alt="logo" />
        </div>
        <div className={cx("hamburger")} onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={cx("menu-list", { "menu-list-slide": menuVisible })}>
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
