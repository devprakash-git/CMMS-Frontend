import { useState } from "react";
import ComplaintForm from "../components/ComplaintForm";
import ComplaintCard from "../components/ComplaintCard";

export default function ComplaintPage() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      category: "Hygiene",
      description: "Tables are not cleaned properly",
      status: "In Progress",
      date: "Jan 30, 2026",
    },
    {
      id: 2,
      category: "Food",
      description: "Please add more fast food options",
      status: "Resolved",
      date: "Jan 25, 2026",
    },
  ]);

  const addComplaint = (data) => {
    setComplaints([data, ...complaints]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">

        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Student Feedback & Complaints
          </h1>

          <p className="text-gray-500 text-lg">
            Submit your feedback or complaint and track its status
          </p>
        </div>

        {/* Form */}
        <ComplaintForm onSubmit={addComplaint} />

        {/* Complaints */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Previously Submitted Complaints
          </h2>

          {complaints.map((c) => (
            <ComplaintCard key={c.id} item={c} />
          ))}
        </div>

      </div>
    </div>
  );
}