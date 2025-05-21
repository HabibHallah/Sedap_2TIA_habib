import React from "react";
import testimonials from "../assets/testimoni.json";

export default function Testimoni() {
  return (
    <div className="bg-pink-50 min-h-screen font-sans py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Testimoni</h2>
        <p className="text-gray-600">Apa kata mereka tentang <span className="text-pink-500 font-semibold">Sedap</span></p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map(({ id, name, avatar, review }) => (
          <div
            key={id}
            className="bg-white rounded-2xl p-6 shadow-md shadow-pink-100 hover:shadow-pink-200 transition"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={avatar}
                alt={name}
                className="w-20 h-20 rounded-full mb-4 shadow"
              />
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">"{review}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
