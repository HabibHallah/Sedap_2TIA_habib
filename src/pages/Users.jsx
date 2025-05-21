import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users)) // karena hasilnya { users: [...] }
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div id="users-container">
      <PageHeader title="Users" breadcrumb="Users / User List" />

      <div className="p-6">
        <div className="overflow-auto rounded-xl shadow border border-[var(--color-garis)]">
          <table className="min-w-full text-sm bg-white">
            <thead>
              <tr className="bg-[var(--color-biru)] text-white text-left">
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">ID</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Name</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Email</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Phone</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Username</th>
                <th className="px-4 py-3 border-b border-[var(--color-garis)]">Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[var(--color-latar)]">
                  <td className="px-4 py-2 border-b border-[var(--color-garis)] font-medium">{user.id}</td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">{user.firstName} {user.lastName}</td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">{user.email}</td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">{user.phone}</td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">{user.username}</td>
                  <td className="px-4 py-2 border-b border-[var(--color-garis)]">{user.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
