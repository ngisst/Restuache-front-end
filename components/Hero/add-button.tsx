'use client'

import { useState } from 'react';
// import { Upload, Camera, Image } from 'lucide-react';
import { FaPlus } from "react-icons/fa";

export default function AddButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setShowOptions(!showOptions);
    setTimeout(() => setIsClicked(false), 200);
  };

  const handleOptionClick = (option) => {
    setShowOptions(false);
  };

  const uploadOptions = [
    { id: 'owned', label: 'Owned', icon: FaPlus, color: 'text-blue-600' },
    { id: 'suggested', label: 'Recommended', icon: FaPlus, color: 'text-purple-600' },
  ];

  return (
    <div className="flex flex-col items-center space-y-4 mt-16">
      {/* Main Add Button */}
      <div className="relative">
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            relative overflow-hidden group
            px-8 py-4 bg-linear-to-r from-green-500 to-green-600 
            hover:from-green-600 hover:to-green-700
            text-white font-semibold rounded-full
            shadow-lg hover:shadow-xl
            transform transition-all duration-300 ease-out
            ${isHovered ? 'scale-105 -translate-y-1' : 'scale-100'}
            ${isClicked ? 'scale-95' : ''}
            focus:outline-hidden focus:ring-4 focus:ring-green-300 focus:ring-opacity-50
          `}
        >
          {/* Animated background ripple effect */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
          
          {/* Button content */}
          <div className="relative flex items-center space-x-3">
            <div className={`
              transform transition-transform duration-300 ease-out
              ${isHovered ? 'rotate-180' : 'rotate-0'}
            `}>
              <FaPlus className="w-5 h-5" />
            </div>
            <span className="text-lg">Add Your Restaurant</span>
          </div>

          {/* Animated border glow */}
          <div className={`
            absolute inset-0 rounded-full border-2 border-green-400
            transition-all duration-300 ease-out
            ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-0'}
          `}></div>
        </button>
      </div>

      {/* Upload Options Dropdown */}
      <div className={`
        transform transition-all duration-300 ease-out origin-top
        ${showOptions ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 min-w-[200px]">
          {uploadOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                  hover:bg-gray-50 transition-all duration-200
                  transform hover:scale-[1.02] hover:translate-x-1
                  focus:outline-hidden focus:ring-2 focus:ring-green-300 focus:ring-opacity-50
                `}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`p-2 rounded-lg bg-gray-100 ${option.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-gray-700 font-medium text-left">
                  {option.label}
                </span>
                <div className="flex-1"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-green-400 transition-colors duration-200"></div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}