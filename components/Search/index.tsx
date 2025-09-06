'use client'

import { useState } from 'react';
import { CiSearch } from "react-icons/ci";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const popularSearches = [
    'nature', 'business', 'technology', 'food', 'travel', 
    'people', 'abstract', 'architecture', 'animals'
  ];

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  return (
    <div className="w-full mx-auto py-6">
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="relative">
          <div className={`relative flex items-center bg-white rounded-lg shadow-lg transition-all duration-200 ${
            isFocused ? 'ring-2 ring-[#15616d] shadow-xl' : 'hover:shadow-xl'
          }`}>
            <CiSearch className="absolute left-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(e);
                }
              }}
              placeholder="Search For Restaurants"
              className="w-full pl-12 pr-4 py-4 text-lg text-gray-700 bg-transparent rounded-l-lg focus:outline-none placeholder-gray-400"
            />
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-[#15616d] hover:bg-green-700 text-white font-semibold rounded-r-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#15616d] focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>

        {/* Search Suggestions Dropdown */}
        {isFocused && searchQuery === '' && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                Trending Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => handleSuggestionClick(search)}
                    className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-500"
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
        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-800">
            <span className="font-semibold">Demo:</span> You searched for "{searchQuery}". 
            In your Next.js app, this would trigger your search logic!
          </p>
        </div>
      )}
    </div>
  );
}