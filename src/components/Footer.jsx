import React from "react";
import footerImage from "../assets/icons/footerIcon.svg";

import Socials from "./reuseables/Socials";

export default function Footer() {
  return (
    <>
    <div className="flex justify-between items-center bg-[#290A38]">
    <div className="flex items-center gap-2">
      <img src={footerImage} alt="Footer" className="w-full h-auto" />
      <div>
        <h2>Nanocodes</h2>
        <p>Event planning</p>
      </div>
      <hr />
    </div>
    <div>
      <h3>About us</h3>
      <p>At Nanocodes event center, we believe in the power of bringing people together to inspire, educate, and elevate.</p>
    </div>
    <div>
      <h3>Our services</h3>
      <p>Our experienced event management team handles every aspect of planning and execution, from venue selection and logistics to program development and attendee engagement.</p>
    </div>
    <div>
      <h3>Our social media handles</h3>
      <p>Do well to follow us, like and comment in every of our post</p>
      <Socials />
      <hr />
    </div>
    </div>
    </>
  );
}
