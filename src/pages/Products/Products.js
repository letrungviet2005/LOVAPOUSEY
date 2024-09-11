import classNames from "classnames/bind";
import style from "./Products.module.scss";

import { useEffect } from "react";

import Header from "../Products/Header/Header";
import List from "../Products/List/List";

const cx = classNames.bind(style);
function Products() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={cx('products')}>
            <Header />
            <List />
        </div>
      );
}

export default Products;