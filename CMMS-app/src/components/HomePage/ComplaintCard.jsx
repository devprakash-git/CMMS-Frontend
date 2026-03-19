export default function ComplaintCard({ item }) {
  const statusColor = {
    Open: "bg-red-100 text-red-600",
    "In Progress": "bg-yellow-100 text-yellow-600",
    Resolved: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md mt-4">
      <div className="flex justify-between items-center">
        
        <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
          {item.category}
        </span>

        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[item.status]}`}>
          {item.status}
        </span>
      </div>

      <p className="mt-3 text-gray-700 text-base">
        {item.description}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        Submitted on {item.date}
      </p>
    </div>
  );
}