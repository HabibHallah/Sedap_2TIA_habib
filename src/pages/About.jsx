import React from "react";

export default function About() {
  const teamMembers = [
    {
      name: "Jono",
      role: "Content Writer",
      image: "https://avatar.iran.liara.run/public/39",
    },
    {
      name: "Joni",
      role: "UI/UX Designer",
      image: "https://avatar.iran.liara.run/public/50",
    },
    {
      name: "Lina",
      role: "Marketing Strategist",
      image: "https://avatar.iran.liara.run/public/74",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md shadow-pink-100 py-10 rounded-xl">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold text-blue-800">
            About <span className="text-pink-500">Sedap</span>
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Kenali siapa kami dan apa yang kami perjuangkan.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Cerita */}
        <section>
          <h2 className="text-2xl font-bold text-pink-600 mb-3">Cerita Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed bg-white p-5 rounded-xl shadow shadow-pink-100">
            Sedap banget abangkuhhh! Kami memulai dengan impian sederhana: membawa rasa sedap ke setiap rumah, dengan cinta dan kualitas terbaik.
          </p>
        </section>

        {/* Misi */}
        <section>
          <h2 className="text-2xl font-bold text-pink-600 mb-3">Misi Kami</h2>
          <p className="text-gray-700 text-lg leading-relaxed bg-white p-5 rounded-xl shadow shadow-pink-100">
            Kami membuat makanan yang tidak hanya sedap di lidah, tetapi juga menghadirkan kehangatan dalam setiap momen bersama keluarga.
          </p>
        </section>

        {/* Tim */}
        <section>
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Anggota Kami</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md shadow-pink-100 hover:shadow-pink-200 transition p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 shadow object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-pink-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
