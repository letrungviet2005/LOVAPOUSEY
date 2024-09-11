import classNames from "classnames/bind";
import style from "./Contact.module.scss";

import MES_8833 from "../../assets/images/products/MES_8833.jpg";

const cx = classNames.bind(style);

function Contact() {
  return (
    <div>
      <div className={cx("Contact")}>
        <div className={cx("row")}>
          <div className={cx("col-md-6", "col-12")}>
            <img src={MES_8833} alt="image" />
          </div>
          <div className={cx("col-md-6", "col-12", "content")}>
            <h1>Get in touch</h1>
            <p>
              We're open 9am - 5pm Monday to Friday. You can get in contact
              using the details below or if you would prefer, you can book in a
              call that suits your schedule through our app.
            </p>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Phone" />
              <button>Submit</button>
            </form>

            <div className={cx("address")}>
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
