import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
function Faq() {
  const faqs = [
    {
      question: "How can I customize a flyer?",
      answer:
        "After selecting an event click on 'Customize Flyer' to start adding your images or name. Use our intuitive editor to place your additions where you like on the flyer...",
    },
    {
      question: "How do I upload an event flyers?",
      answer:
        "Event hosts can upload flyers by clicking on the 'Upload Your Event Flyer' button on our homepage. Follow the prompts to add event details and upload your flyer image...",
    },
    {
      question: "Is my personal informaion secure?",
      answer:
        "Absolutely. We prioritize your privacy and security. All personal data is encrypted and protected in accordance with the latest security standards...",
    },
    {
      question: "What are the benefits?",
      answer:
        "Our platform offers wide visibility for events, easy customization, and secure data handling. You can also be assured of dedicated support and promotional tools.",
    },
  ];

  // openIndex holds the index of the currently open FAQ item.
  // null means no item is open at first
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <div>
      <h2 className="text-4xl text-center mb-2 mt-5 font-bold">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-lg font-normal mb-10">
        Learn everything about nanoevent from the most frequently asked
        questions
      </p>
      <div className="space-y-4 px-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            className="border p-4 rounded shadow cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <FaChevronDown
                className={`transition-transform duration-500 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-opacity duration-100">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Faq;
