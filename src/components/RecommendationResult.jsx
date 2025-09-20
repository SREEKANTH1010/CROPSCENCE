export default function RecommendationResult({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="bg-green-100 border border-green-300 rounded-lg p-6 mt-6 max-w-md mx-auto relative">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-green-800 hover:text-red-600 font-bold"
      >
        ✕
      </button>

      <h2 className="text-xl font-semibold text-green-700 mb-2">Recommendation</h2>
      <p><strong>Suggested Crop:</strong> {data.crop}</p>
      <p><strong>Expected Yield:</strong> {data.yield} tons/acre</p>
      <p><strong>Profit Margin:</strong> {data.profit}%</p>
      <p><strong>Sustainability Score:</strong> {data.sustainability}/10</p>
    </div>
  );
}
