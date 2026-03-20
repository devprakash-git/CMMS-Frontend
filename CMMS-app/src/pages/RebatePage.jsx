import { useState } from "react";
import RebateForm from "../components/RebateForm";

export default function RebatePage() {
  const [activePage, setActivePage] = useState("dashboard");
  const [rebates, setRebates] = useState([]);

  // Add new rebate entry
  const addRebate = (data) => {
    setRebates([...rebates, { ...data, status: "Pending" }]);
    setActivePage("dashboard"); // go back after submit
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Student Panel</h2>

        <ul className="space-y-3">
          <li
            onClick={() => setActivePage("dashboard")}
            className={`p-2 rounded cursor-pointer ${
              activePage === "dashboard" ? "bg-blue-600" : "hover:bg-blue-600"
            }`}
          >
            Dashboard
          </li>

          <li
            onClick={() => setActivePage("rebate")}
            className={`p-2 rounded cursor-pointer ${
              activePage === "rebate" ? "bg-blue-600" : "hover:bg-blue-600"
            }`}
          >
            Rebate
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Dashboard */}
        {activePage === "dashboard" && (
          <div className="bg-white p-4 rounded shadow">
            <h1 className="text-xl font-bold mb-4">Rebate Dashboard</h1>

            {rebates.length === 0 ? (
              <p>No rebate records yet</p>
            ) : (
              <table className="w-full border">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="p-2">S.No</th>
                    <th className="p-2">Roll No</th>
                    <th className="p-2">Start</th>
                    <th className="p-2">End</th>
                    <th className="p-2">Days</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {rebates.map((r, i) => (
                    <tr key={i} className="text-center border-t">
                      <td className="p-2">{i + 1}</td>
                      <td className="p-2">{r.rollNo}</td>
                      <td className="p-2">{r.startDate}</td>
                      <td className="p-2">{r.endDate}</td>
                      <td className="p-2">{r.days}</td>
                      <td className="p-2 text-yellow-600 font-semibold">
                        {r.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Rebate Form */}
        {activePage === "rebate" && (
          <RebateForm onSubmit={addRebate} />
        )}
      </div>
    </div>
  );
}