import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactItem from "./contactItem";
import axios from "axios";
import Socials from "../reuseables/Socials";
import Button from "../reuseables/Button";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      full_name: name,
      email,
      message,
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "https://django-students.up.railway.app/contact/",
        userData
      );
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        alert("Message sent");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex justify-evenly mx-auto mt-10 shadow-lg p-6 max-w-4xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p>Any questions? We would be happy to help you!</p>
          <div className="space-y-8 pt-2">
            <div className="space-y-10">
              <ContactItem
                icon={<FaPhone className="rotate-90" />}
                text="+2348158051119"
              />
              <ContactItem icon={<FaEnvelope />} text="example@gmail.com" />
              <ContactItem
                icon={<FaMapMarkerAlt />}
                text="775 Rolling Green Road"
              />
            </div>
            <Socials />
          </div>
        </div>
        <form
          className="flex flex-col gap-4 w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-2">
            <label
              htmlFor="full-name"
              className="mb-1 font-medium text-gray-700"
            >
              Full Name:
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              disabled={loading}
              placeholder="Your name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              disabled={loading}
              placeholder="youremail@gmail.com"
              autoComplete="email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="message" className="mb-1 font-medium text-gray-700">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              disabled={loading}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="focus:outline-none h-40  p-2 w-full border border-gray-500 resize-none rounded-md"
            ></textarea>
          </div>
          <Button type="submit" className="py-3" isLoading={loading}>
            Send message
          </Button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
