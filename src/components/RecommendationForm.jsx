import { useState } from "react";

export default function RecommendationForm({ onSubmit }) {
  const [form, setForm] = useState({
    ph: "",
    temperature: "",
    moisture: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 space-y-4 max-w-md mx-auto mt-20"
    >
      <h2 className="text-xl font-semibold text-green-700">Enter Soil & Weather Data</h2>

      <div>
        <label className="block text-sm font-medium">Soil pH</label>
        <input
          type="number"
          step="0.1"
          name="ph"
          value={form.ph}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Temperature (°C)</label>
        <input
          type="number"
          name="temperature"
          value={form.temperature}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Moisture (%)</label>
        <input
          type="number"
          name="moisture"
          value={form.moisture}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
      >
        Get Recommendation
      </button>
    </form>
  );
}
