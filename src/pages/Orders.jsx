import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  // Ambil data dari JSON saat komponen dimuat
  useEffect(() => {
    fetch("/data/orders.json")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Failed to load order data:", err));
  }, []);

  const statusClass = {
    Pending: "text-[var(--color-biru)] bg-blue-100",
    Completed: "text-[var(--color-hijau)] bg-green-100",
    Cancelled: "text-[var(--color-merah)] bg-red-100",
  };

  return (
    <div id="orders-container">
      <PageHeader title="Orders" breadcrumb="Orders / Order List">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={() => setIsModalOpen(true)}
        >
          Add Orders
        </button>
      </PageHeader>

      <div className="p-6">
        <div className="overflow-auto rounded-xl shadow border border-[var(--color-garis)]">
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr className="bg-[var(--color-biru)] text-white text-left">
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Order ID</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Customer Name</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Status</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Total Price</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order["Order ID"]} className="hover:bg-[var(--color-latar)]">
                <td className="px-4 py-2 border-b border-[var(--color-garis)] font-medium">{order["Order ID"]}</td>
                <td className="px-4 py-2 border-b border-[var(--color-garis)]">{order["Customer Name"]}</td>
                <td className="px-4 py-2 border-b border-[var(--color-garis)]">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusClass[order["Status"]]}`}>
                    {order["Status"]}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-[var(--color-garis)]">{order["Total Price"]}</td>
                <td className="px-4 py-2 border-b border-[var(--color-garis)]">{order["Order Date"]}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Order */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-10 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Order</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Order ID</label>
                <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter Order ID" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Customer Name</label>
                <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter Customer Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Total Price</label>
                <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter Total Price" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Order Date</label>
                <input type="date" className="w-full border rounded-md px-3 py-2" />
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-gray-300 text-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 rounded-md bg-green-500 text-white">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
