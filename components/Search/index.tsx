"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const popularSearches = [
    "nature",
    "business",
    "technology",
    "food",
    "travel",
    "people",
    "abstract",
    "architecture",
    "animals",
  ];

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="mx-auto w-full py-6">
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="relative">
          <div
            className={`relative flex items-center rounded-lg bg-white shadow-lg transition-all duration-200 ${
              isFocused ? "shadow-xl ring-2 ring-[#15616d]" : "hover:shadow-xl"
            }`}
          >
            <CiSearch className="absolute left-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(e);
                }
              }}
              placeholder="Search For Restaurants"
              className="w-full rounded-l-lg bg-transparent py-4 pr-4 pl-12 text-lg text-gray-700 placeholder-gray-400 focus:outline-hidden"
            />
            <button
              onClick={handleSearch}
              className="rounded-r-lg bg-[#15616d] px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-green-700 focus:ring-2 focus:ring-[#15616d] focus:ring-offset-2 focus:outline-hidden"
            >
              Search
            </button>
          </div>
        </div>

        {/* Search Suggestions Dropdown */}
        {isFocused && searchQuery === "" && (
          <div className="absolute top-full right-0 left-0 z-50 mt-2 rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="p-4">
              <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Trending Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSuggestionClick(search)}
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 focus:outline-hidden"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Demo Results Display */}
      {searchQuery && (
        <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-4">
          <p className="text-green-800">
            <span className="font-semibold">Demo:</span> You searched for &quot;
            {searchQuery}&quot;. In your Next.js app, this would trigger your
            search logic!
          </p>
        </div>
      )}
    </div>
  );
}
