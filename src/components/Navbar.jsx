import React from "react";
import BrandInfo from "./reuseables/BrandInfo";
import { NavLink } from "react-router-dom";
import Button from "./reuseables/Button";

export default function Navbar() {
  return (
    <div className="relative bg-[url('/src/assets/icons/heroImage.svg')] bg-cover bg-center h-[600px] text-white">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex items-center justify-between px-8 py-6">
        <BrandInfo />
        <nav>
          <ul className="flex items-center gap-6 font-medium">
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
        <Button className="bg-purple-700 hover:bg-purple-900 text-white px-4 py-2 rounded-full">
          Upload your event
        </Button>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-[450px] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to NanoEvent,
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          your one-stop shop for personalized event experiences!{" "}
        </p>
        <Button className="bg-purple-700 hover:bg-purple-900 text-white px-6 py-3 rounded-full shadow-md">
          Browse, customize, and RSVP to events in just a few clicks
        </Button>
      </div>
    </div>
  );
}
