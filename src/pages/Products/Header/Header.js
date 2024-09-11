import classNames from "classnames/bind";
import style from "./Header.module.scss";

const cx = classNames.bind(style);

function Header() {
    return ( 
        <div className={cx('header')}>
            <h1>Our Portfolio</h1>
            <p>A curated selection of some of our favourite pieces of work.</p>
            <button>Book a call with us</button>
        </div>
     );
}

export default Header;