import React from "react";
import IphoneLogo from "../../assets/img/google-logo.svg";
import { Link } from "react-router-dom";
import "./Iphone.scss";
import Iphone1 from "../../assets/img/iPhone 14 Pro Space Black Mockup (2).png"
import Iphone2 from "../../assets/img/iPhone 14 Pro Space Black Mockup (1).png"

function Iphone() {
  return (
    <div className="iphone">
      <div className="container">
        <div className="iphone__inner">
          <div className="iphone__text">
            <h2 className="iphone__title">
              <span>Экономьте</span> свое время <br />и получайте{" "}
              <span>максимум</span> <br />
              от ежедневных покупок
            </h2>
            <Link>
              <img className="iphone__link" src={IphoneLogo} alt="" />
            </Link>
          </div>
          <div className="iphone__text2">
            <img className="iphone-img" src={Iphone1} alt="" />
            <img className="iphone-img2" src={Iphone2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphone;
