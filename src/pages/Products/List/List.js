import classNames from "classnames/bind";
import style from "./List.module.scss";

import Card from "./Card/Card";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useRef } from "react";


// import MES_8802 from "../../../assets/images/products/MES_8802.jpg";
// import MES_8804 from "../../../assets/images/products/MES_8804.jpg";
// import MES_8809 from "../../../assets/images/products/MES_8809.jpg";
// import MES_8811 from "../../../assets/images/products/MES_8811.jpg";
// import MES_8814 from "../../../assets/images/products/MES_8814.jpg";
// import MES_8819 from "../../../assets/images/products/MES_8819.jpg";
// import MES_8821 from "../../../assets/images/products/MES_8821.jpg";
// import MES_8824 from "../../../assets/images/products/MES_8824.jpg";

import MES_8808 from "../../../assets/images/products/MES_8808.jpg";
import MES_8816 from "../../../assets/images/products/MES_8816.jpg";
import MES_8823 from "../../../assets/images/products/MES_8823.jpg";
import MES_8827 from "../../../assets/images/products/MES_8827.jpg";
import MES_8828 from "../../../assets/images/products/MES_8828.jpg";
import MES_8839 from "../../../assets/images/products/MES_8839.jpg";
import MES_8843 from "../../../assets/images/products/MES_8843.jpg";
import MES_8846 from "../../../assets/images/products/MES_8846.jpg";
import MES_8847 from "../../../assets/images/products/MES_8847.jpg";
import MES_8850 from "../../../assets/images/products/MES_8850.jpg";
import MES_8855 from "../../../assets/images/products/MES_8855.jpg";
import MES_8858 from "../../../assets/images/products/MES_8858.jpg";
import MES_8860 from "../../../assets/images/products/MES_8860.jpg";
import MES_8861 from "../../../assets/images/products/MES_8861.jpg";
import MES_8863 from "../../../assets/images/products/MES_8863.jpg";

const cx = classNames.bind(style);

function List() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); 
  
  const products = [
    {
      title: "Heavy-Duty Excavator",
      desc: "A powerful machine designed for large-scale excavation projects, offering durability and precision for the toughest jobs.",
      img: MES_8808,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "Cement Mixer",
      desc: "Efficient cement mixer for consistent concrete blending. Ideal for construction sites, ensuring uniform mixing every time.",
      img: MES_8816,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "High-Performance Bulldozer",
      desc: "Built for heavy-duty tasks, this bulldozer offers superior power and control, perfect for clearing large construction sites.",
      img: MES_8823,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "Scaffolding System",
      desc: "Safe and flexible scaffolding system for construction projects, providing easy access to high structures with enhanced stability.",
      img: MES_8827,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "Electric Drilling Machine",
      desc: "A compact and powerful electric drill, ideal for precise drilling and fastening in a variety of construction materials.",
      img: MES_8828,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "Concrete Pump",
      desc: "High-capacity concrete pump designed to deliver concrete with efficiency, perfect for high-rise construction and large-scale projects.",
      img: MES_8839,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "Industrial Grade Crane",
      desc: "A robust crane designed for lifting and moving heavy materials on construction sites with maximum safety and precision.",
      img: MES_8843,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "Steel Beams",
      desc: "High-strength steel beams for structural support in construction projects, offering reliability and resistance to heavy loads.",
      img: MES_8846,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
    {
      title: "Steel Beams",
      desc: "High-strength steel beams for structural support in construction projects, offering reliability and resistance to heavy loads.",
      img: MES_8847,
      list_img: [MES_8850, MES_8855, MES_8858, MES_8860, MES_8861, MES_8863],
    },
  ];

  return (
    <div className={cx("list")} data-aos="fade-up">
      {products.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
}

export default List;
