import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Avatar from "../../assets/images/channels4_profile.jpg";
const Whatsapp = () => {
  return (
    <div>
      <h1>
        <FloatingWhatsApp
          avatar={Avatar}
          notification
          allowClickAway
          statusMessage="Typically replies within 1 hour"
          placeholder="How can we help you"
          phoneNumber="+92-3084977779"
          accountName="The Apex Technology"
        />
      </h1>
    </div>
  );
};

export default Whatsapp;
