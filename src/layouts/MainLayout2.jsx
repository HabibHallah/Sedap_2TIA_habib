import { Outlet } from "react-router-dom";
import Header2 from "../components/Sidebar2.jsx";
import Footer from "../components/Footer.jsx";

export default function MainLayout2() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="w-full">
        <div className="max-w-7xl mx-auto">
          <Header2 />
        </div>
      </div>

      {/* Konten utama tengah */}
      <main className="max-w-7xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>
      <div>
      <Footer />
      </div>
    </div>
  );
}
