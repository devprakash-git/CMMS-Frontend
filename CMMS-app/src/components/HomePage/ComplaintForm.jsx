import { useState } from "react";
import { categories } from "../utils/constants";
import { Send } from "lucide-react";

export default function ComplaintForm({ onSubmit }) {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !description) {
      alert("Fill all fields");
      return;
    }

    onSubmit({
      id: Date.now(),
      category,
      description,
      status: "Open",
      date: new Date().toLocaleDateString(),
    });

    setCategory("");
    setDescription("");
  };

  return (
    <form className="bg-white p-6 rounded-2xl shadow-lg space-y-5" onSubmit={handleSubmit}>
      
      <h2 className="text-xl font-semibold">
        Submit New Complaint or Feedback
      </h2>

      {/* Category */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Category
        </label>

        <select
          className="w-full border rounded-lg p-4 text-base focus:ring-2 focus:ring-blue-500 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          className="w-full border rounded-lg p-4 text-base h-28 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Please describe your complaint or feedback in detail..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Button */}
      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 text-lg font-medium rounded-lg hover:opacity-90">
        <Send size={18} />
        Submit
      </button>
    </form>
  );
}