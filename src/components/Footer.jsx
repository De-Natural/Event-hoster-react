import React from "react";
import footerImage from "../assets/icons/footerIcon.svg";

import Socials from "./reuseables/Socials";

export default function Footer() {
  return (
    <>
    <div className="w-full flex justify-between items-center bg-[#290A38] pt-10 pb-5 px-5">
    <div className="flex items-center gap-2">
      <img src={footerImage} alt="Footer" className="w-[80px] h-[80px]"  />
      <div>
        <h2>Nanocodes</h2>
        <p>Event planning</p>
      </div>
      <hr />
    </div>
    <div className="w-64">
      <p>Join us for an immersive journey into the future of
 technology at Nanocode’s Event, .</p>
    </div>
    <div className="w-[200px]">
      <h3 className="text-sm text-white font-medium mb-1">ABOUT US</h3>
      <p>At Nanocodes event center, we believe in the power of bringing people together to inspire, educate, and elevate.</p>
    </div>
    <div className="w-[210px]">
      <h3 className="text-sm text-white font-medium mb-1">OUR SERVICES</h3>
      <p>Our experienced event management team handles every aspect of planning and execution, from venue selection and logistics to program development and attendee engagement.</p>
    </div>
    <div className="w-64">
      <h3 className="text-sm text-white font-medium mb-1">SOCIAL HANDLES</h3>
      <p>Do well to follow us, like and comment in every of our post</p>
      <Socials className="p-6" />
      <hr className="text-white" />
    </div>
    </div>
    </>
  );
}
