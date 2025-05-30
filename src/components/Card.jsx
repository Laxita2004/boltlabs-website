import React from "react";

export default function Card({ icon, title, subtitle }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
      <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
