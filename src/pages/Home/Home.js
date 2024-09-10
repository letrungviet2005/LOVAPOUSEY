import React from "react";
import classNames from "classnames/bind";
import style from "./Home.module.scss";

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
          <h2>
            We create incredible video content,<br></br>
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

      <div>
        <p>Nơi chứa ảnh nè</p>
      </div>

      <div className={cx("content-2")}>
        <div className="container">
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
            <div className="col-md-6">Cột 1.2</div>
          </div>

          {/* Hàng 2 */}
          <div className="row">
            <div className="col-md-6">Cột 2.1</div>
            <div className="col-md-6">Cột 2.2</div>
          </div>

          {/* Hàng 3 */}
          <div className="row">
            <div className="col-md-6">Cột 3.1</div>
            <div className="col-md-6">Cột 3.2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
