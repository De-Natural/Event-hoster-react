import React from "react";
import facebookIcon from "../../assets/icons/facebookIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.svg";
import telegramIcon from "../../assets/icons/telegramIcon.svg";
import tiktokIcon from "../../assets/icons/tiktokIcon.svg";

const Socials = ({ className = "" }) => {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <a href="https://www.facebook.com/nanocodes">
        <img src={facebookIcon} alt="facebook-icon" />
      </a>
      <a href="https://x.com/Nanocodes11">
        <img src={twitterIcon} alt="twitter-icon" />
      </a>
      <a href="#">
        <img src={telegramIcon} alt="telegram-icon" />
      </a>
      <a href="https://www.tiktok.com/@nanocodes/video/7389630455324101894?q=nanocodes%20programming&t=1726956007000">
        <img src={tiktokIcon} alt="tiktok-icon" />
      </a>
    </div>
  );
};

export default Socials;
