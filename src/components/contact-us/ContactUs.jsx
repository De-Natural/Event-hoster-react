import React, {useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import ContactItem from "./contactItem";
import axios from "axios";
import Socials from "../reuseables/Socials";
function ContactUs() {
 
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      full_name: name,
      email,
      message,
    };
    
    setLoading(true)
    try{
    const response = await axios.post ("https://django-students.up.railway.app/contact/", userData)
    console.log(response);
    if(response.status === 200 || response.status === 201){
      alert("Message sent")
      setName("")
      setEmail("")
      setMessage("")
    }
    }
    catch(err){
      console.error(err)
      alert("Failed to send message. Please try again.");

    }
    finally{
      setLoading(false)
    }
  }
  return (
<<<<<<< HEAD
    <div>
        
    </div>
  )
=======
    <>
      <div className="flex justify-evenly mx-auto mt-10 border-2 border-red-400 p-6 max-w-4xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p>Any questions? We would be happy to help you!</p>
          <div className="space-y-8 pt-2">
            <div className="space-y-10">
              <ContactItem icon={<FaPhone className="rotate-90" />} text="+2348158051119"  />
              <ContactItem icon={<FaEnvelope />} text="example@gmail.com" />
              <ContactItem
                icon={<FaMapMarkerAlt />}
                text="775 Rolling Green Road"
              />
            </div>
          <Socials />
          </div>
        </div>
        <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="full-name" className="mb-1 font-medium text-gray-700">Full Name:</label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              placeholder="Your name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required

            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              autoComplete="email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required

            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="mb-1 font-medium text-gray-700">Message:</label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Type your message here..."
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-400"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              />
          </div>
          <button type="submit" disabled={loading} className="flex items-center justify-center gap-1 bg-black text-white p-3 rounded-md "
>
           {loading ? "Sending information..." :  "Send message"}
            <FaPaperPlane className="transition-transform rotate-60" />
          </button>
        </form>
      </div>
    </>
  );
>>>>>>> 6cc5e24 (updated my branch)
}

export default ContactUs;
