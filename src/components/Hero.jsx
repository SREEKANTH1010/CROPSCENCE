import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
        AI-Powered Crop Recommendations
      </h1>
      <p className="text-lg mb-6">
        Get real-time insights on soil, weather, and market data to boost your farm productivity.
      </p>
      <Link
        to="/recommendations"
        className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
      >
        Get Recommendations
      </Link>
    </section>
  );
}
