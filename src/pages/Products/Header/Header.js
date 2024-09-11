import classNames from "classnames/bind";
import style from "./Header.module.scss";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useRef } from "react";

const cx = classNames.bind(style);

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={cx("header")}>
      <h1 data-aos="fade-up">Our Portfolio</h1>

      <p data-aos="fade-up">
        A curated selection of some of our favourite pieces of work.
      </p>

      <button data-aos="fade-up">Book a call with us</button>
    </div>
  );
}

export default Header;
