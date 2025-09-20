import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="font-bold text-xl">
          Cropscence
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline transition">Home</Link>
          <Link to="/recommendations" className="hover:underline transition">Recommendations</Link>
          <Link to="/chat" className="hover:underline transition">Chatbot</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-600/50 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-green-600 px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        <Link
          to="/"
          className="block py-2 px-3 rounded hover:bg-green-500/70 transition-colors delay-75"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/recommendations"
          className="block py-2 px-3 rounded hover:bg-green-500/70 transition-colors delay-75"
          onClick={() => setIsOpen(false)}
        >
          Recommendations
        </Link>
        <Link
          to="/chat"
          className="block py-2 px-3 rounded hover:bg-green-500/70 transition-colors delay-75"
          onClick={() => setIsOpen(false)}
        >
          Chatbot
        </Link>
      </div>
    </nav>
  );
}
