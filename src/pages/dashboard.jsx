import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-green-600 text-white px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bulldroid Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-white text-green-700 px-4 py-1 rounded-md font-medium"
        >
          Logout
        </button>
      </div>

      <div className="p-10">

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">Total Messages</h2>
            <p className="text-3xl font-bold mt-2">{messages.length}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">Website Status</h2>
            <p className="text-3xl font-bold mt-2 text-green-600">Online</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-500">Admin</h2>
            <p className="text-lg mt-2">lawrans96@gmail.com</p>
          </div>

        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-lg shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Contact Messages
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Message</th>
                </tr>
              </thead>

              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-t">
                    <td className="p-3">{msg.name}</td>
                    <td className="p-3">{msg.email}</td>
                    <td className="p-3">{msg.phone}</td>
                    <td className="p-3">{msg.message}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
}