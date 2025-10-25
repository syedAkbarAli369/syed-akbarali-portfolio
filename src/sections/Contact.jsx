// src/sections/Contact.jsx
"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const ContactExperience = dynamic(
  () => import("@/components/ContactExperience"),
  { ssr: false } // client-only
);

// Import fonts
const batmanFont = localFont({ src: "../fonts/bat.ttf" });

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center bg-black text-white min-h-screen px-6 py-12 relative"
    >
      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className={`font-bold xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-yellow-300 relative z-20 ${batmanFont.className}`}
          >
            Contact Me
          </h1>

        </div>

        {/* Contact Content */}
        <div className="mt-12 md:mt-20">
          <div className="grid grid-cols-12 gap-8">
            {/* Left: Contact Form */}
            <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">
              <ContactForm />
            </div>

            {/* Right: Contact Experience */}
            <div className="md:col-span-3 col-span-12">
              {/* Make sure to adjust spacing classes if you use custom tailwind spacing */}
              <div className="w-full md:h-full h-96 md:absolute top-0 md:left-96 left-0 md:m-0 -mt-33 hidden md:flex bg-black">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
