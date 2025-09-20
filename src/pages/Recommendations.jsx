import { useState, useEffect } from "react";
import RecommendationForm from "../components/RecommendationForm";
import RecommendationResult from "../components/RecommendationResult";

export default function Recommendations() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("lastRecommendation");
    if (saved) setResult(JSON.parse(saved));
  }, []);

  const handleSubmit = (form) => {
    // Crop database with simple conditions
    const crops = [
      { name: "Rice", ph: [5, 6.5], temp: [20, 35], rain: [100, 250] },
      { name: "Wheat", ph: [6, 7.5], temp: [10, 25], rain: [50, 100] },
      { name: "Maize", ph: [5.5, 7], temp: [18, 30], rain: [50, 120] },
      { name: "Barley", ph: [6, 7.5], temp: [7, 24], rain: [40, 100] },
      { name: "Sugarcane", ph: [6, 7.5], temp: [20, 35], rain: [150, 300] },
      { name: "Soybean", ph: [6, 7.5], temp: [15, 30], rain: [60, 150] },
      { name: "Cotton", ph: [5.8, 8], temp: [20, 30], rain: [50, 100] },
    ];

    // Convert inputs
    const ph = parseFloat(form.ph);
    const temperature = parseFloat(form.temperature);
    const rainfall = parseFloat(form.rainfall);

    // Filter crops that match conditions
    let suitable = crops.filter(
      (c) =>
        ph >= c.ph[0] &&
        ph <= c.ph[1] &&
        temperature >= c.temp[0] &&
        temperature <= c.temp[1] &&
        rainfall >= c.rain[0] &&
        rainfall <= c.rain[1]
    );

    // If no crop strictly matches → fallback to all crops
    if (suitable.length === 0) suitable = crops;

    // Pick one randomly
    const chosen = suitable[Math.floor(Math.random() * suitable.length)];

    const recommendation = {
      crop: chosen.name,
      yield: (Math.random() * 5 + 2).toFixed(1), // tons/acre
      profit: (Math.random() * 20 + 10).toFixed(0), // %
      sustainability: (Math.random() * 5 + 5).toFixed(1), // score
    };

    setResult(recommendation);
    localStorage.setItem("lastRecommendation", JSON.stringify(recommendation));
  };

  const handleClose = () => {
    setResult(null);
    localStorage.removeItem("lastRecommendation");
  };

  return (
    <div>
      <RecommendationForm onSubmit={handleSubmit} />
      <RecommendationResult data={result} onClose={handleClose} />
    </div>
  );
}
