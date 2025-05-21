import React, { useState } from "react";
import ListMenu2 from "../components/ListMenu2";

// Import members data (you'll need to create members.json file)
import members from "../assets/Members.json";

export default function Dashboard2() {
  const [email, setEmail] = useState("");
  const [memberInfo, setMemberInfo] = useState(null);
  const [error, setError] = useState("");

  const checkMembership = (e) => {
    e.preventDefault();
    setError("");
    setMemberInfo(null);

    // Validation
    if (!email) {
      setError("Email tidak boleh kosong");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Format email tidak valid");
      return;
    }

    // Check membership
    const foundMember = members.find(member => member.email.toLowerCase() === email.toLowerCase());
    
    if (foundMember) {
      setMemberInfo(foundMember);
    } else {
      setError("Email tidak terdaftar sebagai member");
    }
  };

  const getMemberColor = (type) => {
    switch(type) {
      case "silver":
        return "bg-gray-300 text-gray-800";
      case "gold":
        return "bg-yellow-400 text-yellow-800";
      case "platinum":
        return "bg-blue-200 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getMemberIcon = (type) => {
    switch(type) {
      case "silver":
        return "🥈";
      case "gold":
        return "🥇";
      case "platinum":
        return "💎";
      default:
        return "👤";
    }
  };

  return (
    <div className=" font-sans">
      {/* Navbar */}

      {/* Main content */}
      <div className="max-w-7xl mx-auto mt-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Hero Article */}
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="img/BASO.jpg"
              alt="cover"
              className="w-full h-96 object-cover brightness-75"
            />
            <div className="absolute bottom-0 p-6 text-white">
              <span className="bg-pink-500 text-xs px-2 py-1 rounded-full">Daftar</span>
              <h2 className="text-3xl font-bold mt-3 leading-snug">
                Makana- makanan enak buatan kami
              </h2>
              <p className="text-sm mt-2">Sedap · 29 March 2021</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex mb-4 border-b pb-2">
            <button className="flex-1 text-sm font-semibold text-white bg-pink-500 px-4 py-2 rounded-l-lg">Popular</button>
            <button className="flex-1 text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-r-lg">Recent</button>
          </div>

          {/* Article List */}
          {[
            {
              title: "Baso enak tau",
              date: "29 March 2021",
              img: "img/BASO.jpg"
            },
            {
              title: "Mie ayam enak tau",
              date: "29 March 2021",
              img: "img/MieAyam.jpg"
            },
            {
              title: "Pizza enak tau",
              date: "29 March 2021",
              img: "img/pizza.jpg"
            },
            {
              title: "Tahu Gejrot",
              date: "29 March 2021",
              img: "img/Tahugejrot.jpg"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center mb-4">
              <img src={item.img} alt="thumb" className="w-10 h-10 rounded-md mr-3" />
              <div>
                <p className="text-sm font-semibold leading-tight text-gray-800 hover:text-pink-500 cursor-pointer">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editor's Pick */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h3 className="text-xl font-bold mb-6">List Makanan</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src="img/Spaghetti.jpg"
                alt="editor pick"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">Italiano</span>
                <h4 className="mt-2 text-md font-semibold leading-tight">
                  Spaghetti
                </h4>
                <p className="text-xs text-gray-400 mt-1">29 March 2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Membership Check Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Cek Keanggotaan</h3>
          
          <form onSubmit={checkMembership} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && !memberInfo && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                Cek Status
              </button>
            </div>
          </form>

          {memberInfo && (
            <div className={`p-4 rounded-lg ${getMemberColor(memberInfo.tipe_member)}`}>
              <div className="flex items-center">
                <span className="text-2xl mr-3">{getMemberIcon(memberInfo.tipe_member)}</span>
                <div>
                  <p className="font-semibold">🧾 Selamat datang, {memberInfo.nama}!</p>
                  <p>Anda adalah member {memberInfo.tipe_member}.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}