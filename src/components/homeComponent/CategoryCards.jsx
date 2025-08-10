import React from "react";
import { FaSwimmer, FaRunning, FaFlagCheckered } from "react-icons/fa";
import { MdOutlineDirectionsRun } from "react-icons/md";

const categories = [
  { name: "Swimming", icon: <FaSwimmer className="text-5xl" /> },
  { name: "Sprinting", icon: <FaRunning className="text-5xl" /> },
  { name: "Long Jump", icon: <MdOutlineDirectionsRun className="text-5xl" /> },
  { name: "Hurdle Race", icon: <FaFlagCheckered className="text-5xl" /> },
];

const CategoryCards = () => {
  return (
    <section className="py-10 px-4 ">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Sports Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow border border-blue-200"
          >
            <div className="text-blue-500 mb-4">{cat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
