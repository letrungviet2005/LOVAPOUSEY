import React from "react";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import image1 from "../../assets/home/MES_8823.jpg";

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <h2>
            We create incredible<br></br> video content,<br></br>
            to help our clients stand out from the crowd.
          </h2>
        </div>
        <div className={cx("content-1")}>
          <p>
            Panotion works with small to medium size companies, by creating
            tailored specific video
            <br></br>
            to raise brand awareness and connect with audiences.
          </p>
        </div>
        <div className={cx("language")}>
          <button>VietNam</button>
          <button>English</button>
          <button>Japan</button>
        </div>
      </div>

      <div className={cx("content-image")}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={image1}
          alt="image1"
        />
      </div>

      <div className={cx("content-2")}>
        <div>
          {/* Hàng 1 */}
          <div className="row">
            <div className="col-md-6">
              <h2>We keep it simple.</h2>
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
              <h2>We keep it simple.</h2>
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
              <h2>We keep it simple.</h2>
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
