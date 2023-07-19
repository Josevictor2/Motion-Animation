import { useState } from "react";

export const Search = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsInputVisible(true);
  };

  const handleMouseLeave = () => {
    setIsInputVisible(false);
  };

  return (
    <div className="relative transition-all">
      <div
        className="absolute top-0 right-0 mt-3 mr-4 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-400 ${isInputVisible ? "hidden" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 11.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 12l-3.293-3.293a1 1 0 011.414-1.414l4 4zM7 10a3 3 0 116 0 3 3 0 01-6 0z"
            clipRule="evenodd"
          />
        </svg>
        {isInputVisible && (
          <input
            type="text"
            placeholder="Pesquisar"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-800"
          />
        )}
      </div>
    </div>
  );
};
