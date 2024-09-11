import React, { useState, useEffect } from "react";
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

  // Toggle menu khi nhấp vào icon hamburger
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Đóng menu khi nhấp vào bất kỳ link nào
  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Đóng menu khi thay đổi kích thước màn hình
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767.8) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Dọn dẹp event listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={cx("container")}>
        <div className={cx("navbar")}>
          <div className={cx("menu")}>
            <div className={cx("logo")}>
              <img src={logo} alt="logo" />
            </div>
            <div className={cx("hamburger")} onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className={cx("menu-list")}>
              <Link to="/" className={cx("menu-item")}>
                Home
              </Link>
              <Link to="/portfolio" className={cx("menu-item")}>
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
        {/* Thêm lớp "open" khi menuVisible là true */}
        <div className={cx("menu-mobile", { open: menuVisible })}>
          <div className={cx("menu-list-mobile")}>
            {/* Nhấp vào link sẽ tự động đóng menu */}
            <Link to="/" className={cx("menu-item-mobile")} onClick={closeMenu}>
              Home
            </Link>
            <Link
              to="/portfolio"
              className={cx("menu-item-mobile")}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={cx("menu-item-mobile")}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div style={{ display: "flex" }}>
              <div className={cx("menu-social-mobile")}>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("space")}></div>
    </div>
  );
}

export default Navbar;
