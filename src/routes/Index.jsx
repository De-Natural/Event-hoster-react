import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Faq from '../components/faq/Faq'
import SignUp from '../components/auth-pages/SignUp'
import Login from '../components/auth-pages/login/Login'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Review from "../components/review/Review";
import Rating from "../components/rating/Rating";
import CreateEvent from "../components/createEvent/CreateEvent";
import Layout from "../layout/Layout";
import Faq from "../components/pages/Faq";
import ContactUs from "../components/pages/ContactUs";
import Landing from "../components/landing/Landing";
import AboutUs from "../components/pages/AboutUs";
import UpComingEvent from "../components/pages/UpComingEvent";
import Testimonials from "../components/pages/Testimonials";

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/faq" element={<Faq />} />
      <Route path="/auth-pages" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/upcoming-events" element={<UpComingEvent />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="faqs" element={<Faq />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="reviews" element={<Review />} />
        <Route path="rating" element={<Rating />} />
        <Route path="create-event" element={<CreateEvent />} />
      </Route>
    </Routes>
  );
};

export default IndexRoutes;
