import React from "react";
import BrandInfo from "./reuseables/BrandInfo";
import { NavLink } from "react-router-dom";
import Button from "./reuseables/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative bg-[url('/src/assets/icons/heroImage.svg')] bg-cover bg-center h-[600px] text-white">
      {/* <div className="absolute inset-0 bg-black/60"></div> */}
      <div className=" w-full relative flex z-10 items-center gap-4 sm:gap-2 justify-between px-8 py-6">
    
        <GiHamburgerMenu
          className="text-3xl text-white visible sm:hidden cursor-pointer"
          id="hamburger-menu"
          onClick={toggleNav}
        />
        <BrandInfo />
        <nav className={`h-[500px] md:h-fit absolute w-full md:w-fit top-full left-0 sm:static sm:block gap-5 sm:gap-10 transition-all duration-300 bg-black/10 md:bg-transparent ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="h-full flex flex-col sm:flex-row justify-evenly md:justify-center items-center gap-6 font-medium text-base md:text-xl">
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming-events">Upcoming Events</NavLink>
            </li>
            <li>
              <NavLink to="/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">Faqs</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <Button className="bg-purple-700 hover:bg-purple-900 text-white p-2 rounded-2xl md:rounded-full text-sm md:text-base">
          Upload your event
        </Button>
      </div>
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-[450px] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to NanoEvent,
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          your one-stop shop for personalized event experiences!{" "}
        </p>
        <Button className="bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-full shadow-md">
          Browse, customize, and RSVP to events in just a few clicks
        </Button>
      </div> */}
    </div>
  );
}

{/* <header>
<nav class="navbar"> 
  <div class="navbar-container container">
    <input type="checkbox" name="" id="" />
    <div class="hamburger-lines">
      <span class="line line1"></span> 
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
    <ul class="menu-items">
      <li>
        <a class="about-us" href="#aboutUs">About Us</a>
        <span class="hoverDesign"></span>
      </li>
      <li>
        <a class="upcoming-event" href="#upcomingEvent">Upcoming Event</a>
        <span class="hoverDesign"></span>
      </li>
      <li>
        <a class="testimonials" href="#Testimonials">Testimonials</a>
        <span class="hoverDesign"></span>
      </li>
      <li>
        <a class="faq" href="/pages/faq.html">FAQ</a>
        <span class="hoverDesign"></span>
      </li>
      <li>
        <a class="contact--us" href="/pages/contactus.html">Contact Us</a>
        <span class="hoverDesign"></span>
      </li>
      <li>
        <a class="logIn" href="/pages/auth/login.html">Log in</a>
      </li>
      <li>
        <a class="signUp" href="/pages/auth/signup.html">Sign up</a>
      </li>
    </ul>
    <div class="logo">
      <a href="./">
        <img
          src="./assets/images/nanocodes_logo_white.svg"
          alt="nanocodes_logo"
        />
      </a>
    </div>
  </div>
</nav>
</header> */}


// @media (max-width: 768px) {
// 	.navbar {
// 		opacity: 0.95;
// 	}

// 	.navbar a {
// 		font-size: 17px;
// 	}
// 	.navbar-container input[type="checkbox"],
// 	.navbar-container .hamburger-lines {
// 		display: block;
// 	}

// 	.navbar-container {
// 		display: block;
// 		position: relative;
// 		height: 64px;
// 		padding: 10px;
// 	}

// 	.navbar-container input[type="checkbox"] {
// 		position: absolute;
// 		display: block;
// 		height: 32px;
// 		width: 30px;
// 		top: 20px;
// 		left: 20px;
// 		z-index: 5;
// 		opacity: 0;
// 		cursor: pointer;
// 	}

// 	.navbar-container .hamburger-lines {
// 		display: block;
// 		height: 28px;
// 		width: 35px;
// 		position: absolute;
// 		top: 20px;
// 		left: 20px;
// 		z-index: 2;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: space-between;
// 	}

// 	.navbar-container .hamburger-lines .line {
// 		display: block;
// 		height: 4px;
// 		width: 100%;
// 		border-radius: 10px;
// 		background: #fff;
// 	}

// 	.navbar-container .hamburger-lines .line1 {
// 		transform-origin: 0% 0%;
// 		transition: transform 0.3s ease-in-out;
// 	}

// 	.navbar-container .hamburger-lines .line2 {
// 		transition: transform 0.2s ease-in-out;
// 	}

// 	.navbar-container .hamburger-lines .line3 {
// 		transform-origin: 0% 100%;
// 		transition: transform 0.3s ease-in-out;
// 	}

// 	.navbar .menu-items {
// 		padding-top: 100px;
// 		background: #ffffff;
// 		height: 100vh;
// 		max-width: 80%;
// 		transform: translate(-150%);
// 		display: flex;
// 		flex-direction: column;
// 		align-items: flex-start;
// 		margin-left: -40px;
// 		margin-top: -50px;
// 		padding-left: 80px;
// 		transition: transform 0.5s ease-in-out;
// 	}

// 	.navbar .menu-items li {
// 		margin-bottom: 1.8rem;
// 		font-size: 1.2rem;
// 		font-weight: 500;
// 	}
// 	.menu-items li:nth-last-child(1) a,
// 	.menu-items li:nth-last-child(2) a {
// 		color: #fff;
// 	}

// 	.navbar a {
// 		color: #813c8f;
// 	}

// 	.logo {
// 		position: absolute;
// 		top: 10px;
// 		right: 15px;
// 		font-size: 2.3rem;
// 	}

// 	.navbar-container input[type="checkbox"]:checked ~ .menu-items {
// 		transform: translateX(0);
// 	}

// 	.navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
// 		transform: rotate(45deg);
// 		background-color: #813c8f;
// 	}

// 	.navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
// 		transform: scaleY(0);
// 	}

// 	.navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
// 		transform: rotate(-45deg);
// 		background-color: #813c8f;
// 	}
// }

// @media (max-width: 500px) {
// 	.navbar-container input[type="checkbox"]:checked ~ .logo {
// 		display: none;
// 	}
// }

// @media (min-width: 1250px) {
// 	header {
// 		/* max-width: 1250px; */
// 		/* left: auto; */
// 		align-self: center;
// 	}
// }