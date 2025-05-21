import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState([]);

  // Ambil data dari JSON saat komponen dimuat
  useEffect(() => {
    fetch("/data/customers.json")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error("Failed to load customer data:", err));
  }, []);

  const loyaltyClass = {
    Bronze: "text-yellow-700 bg-yellow-100",
    Silver: "text-gray-700 bg-gray-200",
    Gold: "text-yellow-500 bg-yellow-200",
  };

  return (
    <div id="customers-container">
      <PageHeader title="Customers" breadcrumb="Customers / Customer List">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={() => setIsModalOpen(true)}
        >
          Add Customers
        </button>
      </PageHeader>

      <div className="p-6">
        <div className="overflow-auto rounded-xl shadow border border-[var(--color-garis)]">
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr className="bg-[var(--color-biru)] text-white text-left">
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Customer ID</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Name</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Email</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Phone</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((cust) => (
                <tr key={cust["Customer ID"]} className="hover:bg-[var(--color-latar)]">
                  <td className="px-4 py-2 border-b border-[var(--color-garis)] font-medium">
                    {cust["Customer ID"]}
                  </td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">
                    {cust["Customer Name"]}
                  </td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">
                    {cust["Email"]}
                  </td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">
                    {cust["Phone"]}
                  </td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${loyaltyClass[cust["Loyalty"]]}`}
                    >
                      {cust["Loyalty"]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Customer */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-10 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Customer</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Customer ID</label>
                <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter Customer ID" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Customer Name</label>
                <input type="text" className="w-full border rounded-md px-3 py-2" placeholder="Enter Customer Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border rounded-md px-3 py-2" placeholder="Enter Email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" className="w-full border rounded-md px-3 py-2" placeholder="Enter Phone Number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Loyalty</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Bronze</option>
                  <option>Silver</option>
                  <option>Gold</option>
                </select>
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
