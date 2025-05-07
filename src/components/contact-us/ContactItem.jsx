import React from "react";

function ContactItem({ icon, text, }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-md shadow-sm border border-gray-300">
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default ContactItem;
