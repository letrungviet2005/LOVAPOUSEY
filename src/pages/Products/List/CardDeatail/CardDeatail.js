import classNames from "classnames/bind";
import style from "./CardDetail.module.scss";
import logo from "../../../../assets/images/logo_bg.png";

import { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const cx = classNames.bind(style);

function CardDeatail() {
  const location = useLocation();
  const { product } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={cx("cardDeatail")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-6", "col-12", "header")}>
          <h1 data-aos="fade-up">{product.title}</h1>
          <p data-aos="fade-up">{product.desc}</p>
          <button data-aos="fade-up">Book a consultation call</button>
        </div>
        <div className={cx("col-sm-6", "col-12")}>
          <img src={product.img} alt="" />
        </div>
      </div>
      <div className={cx("my-5", "text")}>
        <img src={logo} alt="logo"  data-aos="fade-up"/>
        <h3 data-aos="fade-up">The more I watch it, the better it gets. Very Clever Editing!</h3>
        <button data-aos="fade-up">Get in touch!</button>
      </div>
      <div className={cx("row")} data-aos="fade-up">
        {product.list_img.map((image) => (
          <div className={cx("col-sm-6", "col-12", "p-4", "item-image")}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardDeatail;
