import classNames from "classnames/bind";
import style from "./CardDetail.module.scss";
import logo from "../../../../assets/images/logo_bg.png";

import { useLocation } from "react-router-dom";

const cx = classNames.bind(style);

function CardDeatail() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className={cx("cardDeatail")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-6", "col-12", "header")}>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <button>Book a consultation call</button>
        </div>
        <div className={cx("col-sm-6", "col-12")}>
          <img src={product.img} alt="" />
        </div>
      </div>
      <div className={cx("my-5", "text")}>
        <img src={logo} alt="logo" />
        <h3>The more I watch it, the better it gets. Very Clever Editing!</h3>
        <button>Get in touch!</button>
      </div>
      <div className={cx("row")}>
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
