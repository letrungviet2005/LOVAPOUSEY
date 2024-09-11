import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import image1 from "../../assets/home/MES_8823.jpg";
import image2 from "../../assets/home/MES_8816.jpg";
import Cookies from "js-cookie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const cx = classNames.bind(style);

function Home() {
  const [language, setLanguage] = useState("English");

  const setLanguageAndCookie = (lang) => {
    setLanguage(lang);
    Cookies.set("language", lang, { expires: 365 });
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: false,
  };

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <h2>
            We create incredible
            <br /> video content,
            <br />
            to help our clients stand out from the crowd.
          </h2>
        </div>
        <div className={cx("content-1")}>
          <p>
            Panotion works with small to medium size companies, by creating
            tailored specific video
            <br />
            to raise brand awareness and connect with audiences.
          </p>
        </div>
        <div className={cx("language")}>
          <button onClick={() => setLanguageAndCookie("VietNam")}>
            VietNam
          </button>
          <button onClick={() => setLanguageAndCookie("English")}>
            English
          </button>
          <button onClick={() => setLanguageAndCookie("Japan")}>Japan</button>
        </div>
      </div>

      <div className={cx("content-image")}>
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src={image1}
              alt="image1"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src={image2}
              alt="image1"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src={image1}
              alt="image1"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src={image1}
              alt="image1"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              src={image1}
              alt="image1"
            />
          </div>
        </Slider>
      </div>

      <div className={cx("content-2")}>
        <div>
          {/* Hàng 1 */}
          <div className="row">
            <div className="col-md-6">
              <h1>We keep it simple.</h1>
              <p>
                We'll begin our conversations discussing your business goals,
                priorities and what you would like to get out of a video
                project. We plan everything that we need to shoot with you,
                including any models, props and locations. Once all the filming
                is complete we move onto the editing phase. We select the
                perfect music and footage to work in parallel with your brand,
                so we can share your message in the best way.
              </p>
            </div>
            <div className="col-md-6">
              <img
                style={{ width: "100%", height: "auto" }}
                src={image1}
                alt="image1"
              />
            </div>
          </div>
          <div className={cx("space")}></div>

          {/* Hàng 2 */}
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ width: "100%", height: "auto" }}
                src={image1}
                alt="image1"
              />
            </div>
            <div className="col-md-6">
              <h1>We keep it simple.</h1>
              <p>
                We'll begin our conversations discussing your business goals,
                priorities and what you would like to get out of a video
                project. We plan everything that we need to shoot with you,
                including any models, props and locations. Once all the filming
                is complete we move onto the editing phase. We select the
                perfect music and footage to work in parallel with your brand,
                so we can share your message in the best way.
              </p>
            </div>
          </div>
          <div className={cx("space")}></div>

          {/* Hàng 3 */}
          <div className="row">
            <div className="col-md-6">
              <h1>We keep it simple.</h1>
              <p>
                We'll begin our conversations discussing your business goals,
                priorities and what you would like to get out of a video
                project. We plan everything that we need to shoot with you,
                including any models, props and locations. Once all the filming
                is complete we move onto the editing phase. We select the
                perfect music and footage to work in parallel with your brand,
                so we can share your message in the best way.
              </p>
            </div>
            <div className="col-md-6">
              <img
                style={{
                  width: "100%",
                  height: "auto",
                  borderBottomRightRadius: "50%",
                }}
                src={image1}
                alt="image1"
              />
            </div>
          </div>
          <div className={cx("space")}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
