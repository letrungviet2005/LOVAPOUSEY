import classNames from "classnames/bind";
import style from "./Footer.module.scss";

import logo from "../../assets/images/logo_bg.png";
import logo2 from "../../assets/images/logo_footer_bg.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("row")}>
        <div className={cx("col")}>
          <img src={logo} className={cx("logo")} alt="logo" />
        </div>
        <div className={cx("col")}>
          <h3>Useful Links</h3>
          <Link to="/" className={cx("item")}>
            Home
          </Link>
          <Link to="/Products" className={cx("item")}>
            Portfolio
          </Link>
          <Link to="/Contact" className={cx("item")}>
            Contact
          </Link>
        </div>
        <div className={cx("col")}>
          <h3>Follow Us</h3>
          <Link to="#" className={cx("item")}>
            <i class="fa-brands fa-square-facebook"></i> Facebook
          </Link>
          <Link to="#" className={cx("item")}>
            <i class="fa-brands fa-square-instagram"></i> Instagram
          </Link>
          <Link to="#" className={cx("item")}>
            <i class="fa-brands fa-linkedin"></i> Linkedin
          </Link>
        </div>
        <div className={cx("col")}>
          <h3>Address</h3>
          <div className={cx("item")}>
            <i class="fa-solid fa-location-dot"></i> Lien Chieu, Da Nang, Viet
            Nam
          </div>
          <div className={cx("item")}>
            <i class="fa-solid fa-phone"></i> 0123456789
          </div>
          <div className={cx("item")}>
            <i class="fa-solid fa-envelope"></i> info@masothue.com
          </div>
        </div>
      </div>
      <div className={cx("bottom")}>
        <img src={logo2} className={cx("logo2")} alt="logo" />
        <span className={cx("line")}></span>
      </div>
    </div>
  );
}

export default Footer;
