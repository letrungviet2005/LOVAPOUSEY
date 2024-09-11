import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import image1 from "../../assets/home/MES_8823.jpg";
import image2 from "../../assets/home/MES_8816.jpg";
import image3 from "../../assets/home/MES_8832.jpg";
import image4 from "../../assets/home/MES_8846.jpg";
import image5 from "../../assets/home/MES_8833.jpg";
import image6 from "../../assets/home/MES_8839.jpg";
import Cookies from "js-cookie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring, animated } from "@react-spring/web"; // Import react-spring
import "./Home.css";

const cx = classNames.bind(style);

function Home() {
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const savedLanguage = Cookies.get("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const setLanguageAndCookie = (lang) => {
    setLanguage(lang);
    Cookies.set("language", lang, { expires: 365 });
  };

  const content = {
    English: {
      title:
        "Architectural masterpieces from Lovapousey – Shaping the future with elegance.",
      description:
        "At Lovapousey, we merge art and architecture, creating innovative and sustainable designs that are both functional and aesthetically remarkable. We are committed to delivering architectural masterpieces that stand out while blending seamlessly with the environment.",
      section1: {
        heading: "We design with purpose.",
        text: "Our approach to architecture is about more than just constructing buildings; it's about creating spaces that enrich the lives of those who use them. From concept to completion, we focus on sustainability, innovation, and aesthetics to ensure that each project not only serves its purpose but also inspires its users.",
      },
      section2: {
        heading: "Simplicity and elegance.",
        text: "Simplicity is at the heart of our design philosophy. Lovapousey emphasizes timelessness, creating designs with clean lines and functional spaces that harmonize with their surroundings. We aim to build environments that are both beautiful and practical, perfectly suited for modern living.",
      },
      section3: {
        heading: "Innovation meets tradition.",
        text: "At Lovapousey, we respect the architectural principles of the past while embracing the future. By combining modern materials and techniques with traditional elements, we create structures that are not only visually striking but also built to endure.",
      },
    },
    VietNam: {
      title:
        "Tuyệt tác kiến trúc từ Lovapousey – Tạo dựng tương lai từ sự tinh tế",
      description:
        "Tại Lovapousey, chúng tôi kết hợp nghệ thuật và kiến trúc, tạo ra những thiết kế sáng tạo và bền vững, vừa có tính thẩm mỹ vượt trội vừa đảm bảo công năng. Cam kết của chúng tôi là mang đến những kiệt tác kiến trúc, nổi bật nhưng vẫn hòa hợp với môi trường xung quanh.",
      section1: {
        heading: "Hướng đến khách hàng.",
        text: "Cách tiếp cận kiến trúc của chúng tôi không chỉ dừng lại ở việc xây dựng, mà còn là tạo ra không gian nâng cao chất lượng sống của người sử dụng. Từ ý tưởng đến hoàn thiện, chúng tôi tập trung vào tính bền vững, sự đổi mới và thẩm mỹ, nhằm đảm bảo mỗi dự án không chỉ đáp ứng mục tiêu mà còn truyền cảm hứng.",
      },
      section2: {
        heading: "Sự đơn giản và tinh tế.",
        text: "Sự đơn giản là yếu tố cốt lõi trong triết lý thiết kế của chúng tôi. Lovapousey chú trọng sự vĩnh cửu, tạo ra những thiết kế với đường nét rõ ràng và không gian chức năng hài hòa với môi trường xung quanh. Chúng tôi hướng tới xây dựng những không gian vừa đẹp mắt vừa tiện dụng, phù hợp cho cuộc sống hiện đại.",
      },
      section3: {
        heading: "Đổi mới kết hợp với truyền thống.",
        text: "Tại Lovapousey, chúng tôi tôn trọng những nguyên tắc kiến trúc cổ điển trong khi vẫn hướng về tương lai. Bằng cách kết hợp các vật liệu và kỹ thuật hiện đại với các yếu tố truyền thống, chúng tôi tạo ra những công trình không chỉ đẹp mắt mà còn bền vững theo thời gian.",
      },
    },
    Japan: {
      title: "Lovapouseyの建築傑作 – 優雅さで未来を築く。",
      description:
        "Lovapouseyでは、アートと建築を融合させ、機能的でありながらも美しさに優れた革新的で持続可能なデザインを生み出しています。私たちは、周囲の環境に溶け込むと同時に際立つ建築の傑作を提供することを使命としています。",
      section1: {
        heading: "私たちは目的を持って設計します。",
        text: "私たちの建築アプローチは、単なる建物の建設ではなく、それを使用する人々の生活を豊かにする空間の創造です。コンセプトから完成まで、私たちは持続可能性、革新性、美観に焦点を当て、プロジェクトがその目的を果たすだけでなく、使用者にインスピレーションを与えるよう努めています。",
      },
      section2: {
        heading: "シンプルさとエレガンス。",
        text: "シンプルさは私たちのデザイン哲学の核心です。Lovapouseyは、清潔なラインと周囲と調和する機能的な空間を強調するタイムレスなデザインを追求しています。私たちは、美しく実用的で、現代生活に最適な環境を作り出すことを目指しています。",
      },
      section3: {
        heading: "革新と伝統の融合。",
        text: "Lovapouseyでは、過去の建築原則を尊重しながら、未来に向けて進んでいます。現代的な材料と技術を伝統的な要素と組み合わせることで、視覚的に魅力的でありながら、耐久性のある建築物を作り出します。",
      },
    },
  };

  const selectedContent = content[language];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: false,
  };

  // Define spring effects
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const fadeInDelay = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 500,
  });

  return (
    <div className={cx("container")}>
      <animated.div style={fadeIn}>
        <div className={cx("header")}>
          <div className={cx("title")}>
            <h2>{selectedContent.title}</h2>
          </div>
          <div className={cx("content-1")}>
            <p>{selectedContent.description}</p>
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
      </animated.div>

      <div className={cx("content-image")}>
        <Slider {...settings}>
          <div>
            <img
              className={cx("carousel-image")}
              src={image6}
              alt="Architecture 1"
            />
          </div>
          <div>
            <img
              className={cx("carousel-image")}
              src={image2}
              alt="Architecture 2"
            />
          </div>
          <div>
            <img
              className={cx("carousel-image")}
              src={image3}
              alt="Architecture 3"
            />
          </div>
        </Slider>
      </div>

      <div style={{ width: "100%", height: "auto" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={image4}
          alt="Architecture 4"
        />
        <img
          style={{ width: "100%", height: "100%" }}
          src={image4}
          alt="Architecture 5"
        />
      </div>

      <animated.div style={fadeInDelay}>
        <div className={cx("content-2")}>
          <div>
            {/* Row 1 */}
            <div className="row">
              <div className="col-md-6">
                <h1 className={cx("content-mother")}>
                  {selectedContent.section1.heading}
                </h1>
                <div className={cx("content-children")}>
                  <p>{selectedContent.section1.text}</p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className={cx("image-content")}
                  src={image1}
                  alt="Architecture Concept"
                />
              </div>
            </div>
            <div className={cx("space")}></div>

            {/* Row 2 */}
            <div className="row">
              <div className="col-md-6">
                <img
                  className={cx("image-content")}
                  src={image2}
                  alt="Architecture Design"
                />
              </div>
              <div className="col-md-6">
                <h1 className={cx("content-mother")}>
                  {selectedContent.section2.heading}
                </h1>
                <div className={cx("content-children")}>
                  <p>{selectedContent.section2.text}</p>
                </div>
              </div>
            </div>

            <div className={cx("space")}></div>

            {/* Row 3 */}
            <div className="row">
              <div className="col-md-6">
                <h1 className={cx("content-mother")}>
                  {selectedContent.section3.heading}
                </h1>
                <div className={cx("content-children")}>
                  <p>{selectedContent.section3.text}</p>
                </div>
                <button>Liên hệ</button>
              </div>
              <div className="col-md-6">
                <img
                  className={cx("image-content")}
                  style={{ width: "100%", height: "auto" }}
                  src={image5}
                  alt="Architectural Tradition"
                />
              </div>
            </div>
            <div className={cx("space")}></div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default Home;
