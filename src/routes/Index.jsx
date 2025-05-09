import React from "react";
import { Routes, Route } from "react-router-dom";
import Faq from "../components/faq/Faq";
import ContactUs from "../components/contact-us/ContactUs";
import Review from "../components/review/Review";
import Rating from "../components/rating/Rating";
import CreateEvent from "../components/createEvent/CreateEvent";
import Layout from "../layout/Layout";

export const IndexRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="faq" element={<Faq />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="reviews" element={<Review />} />
      <Route path="rating" element={<Rating />} />
      <Route path="create-event" element={<CreateEvent />} />
    </Route>
  </Routes>
  );
};

export default IndexRoutes;
