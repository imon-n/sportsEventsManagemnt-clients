// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Welcome to <span className="font-semibold">Athletic-hub</span> — your
          one-stop platform for managing and booking athletic events.
          Our mission is to connect sports enthusiasts and organizers, making
          event management simple, interactive, and accessible for everyone.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading platform for sports events, fostering community
              engagement and healthy lifestyles worldwide.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Making sports accessible by simplifying event creation,
              management, and participation for everyone.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, and inclusivity are at the core of
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
