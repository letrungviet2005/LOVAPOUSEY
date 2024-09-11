import classNames from "classnames/bind";
import style from "./Card.module.scss";

import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

function Card({product}) {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate("/detail", { state: { product } });
    };

    return ( 
        <div className={cx('card')} onClick={handleCardClick}>
            <img src={product.img} alt="" />
            <div className={cx('title')}>{product.title}</div>
            <div className={cx('desc')}>{product.desc}</div>
        </div>
     );
}

export default Card;