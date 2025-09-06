'use client'

import { useState } from 'react';

const FilterBoard = () => {
  const [selectedFood, setSelectedFood] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState([]);
  const [deliveryFilter, setDeliveryFilter] = useState('all');

  const foodTypes = ['Fish', 'Meat', 'Chicken', 'Vegetarian', 'Vegan', 'Seafood'];
  const foodOrigins = ['Western', 'Eastern', 'African', 'Mediterranean', 'Latin American', 'Asian'];
  const deliveryOptions = [
    { value: 'all', label: 'All Restaurants' },
    { value: 'delivery', label: 'Delivery Available' },
    { value: 'no-delivery', label: 'No Delivery' }
  ];

  const toggleFood = (food) => {
    setSelectedFood(prev => 
      prev.includes(food) 
        ? prev.filter(f => f !== food)
        : [...prev, food]
    );
  };

  const toggleOrigin = (origin) => {
    setSelectedOrigin(prev => 
      prev.includes(origin) 
        ? prev.filter(o => o !== origin)
        : [...prev, origin]
    );
  };

  const clearAllFilters = () => {
    setSelectedFood([]);
    setSelectedOrigin([]);
    setDeliveryFilter('all');
  };

  const FilterButton = ({ item, isSelected, onClick, type = 'default' }) => (
    <button
      onClick={() => onClick(item)}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg active:scale-95
        ${isSelected 
          ? 'bg-gray-700 text-white shadow-md ring-2 ring-gray-600 ring-opacity-50' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
        }
        ${type === 'delivery' ? 'min-w-[120px]' : ''}
      `}
    >
      {item}
    </button>
  );

  const DeliveryButton = ({ option, isSelected, onClick }) => (
    <button
      onClick={() => onClick(option.value)}
      className={`
        px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
        transform hover:scale-105 hover:shadow-lg active:scale-95 border-2
        ${isSelected 
          ? 'bg-gray-700 text-white border-gray-700 shadow-md' 
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
        }
      `}
    >
      {option.label}
    </button>
  );

  return (
    <div className="w-full mb-12 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Food Type Filter */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">What They Serve</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {foodTypes.map((food) => (
              <div key={food} className="transform transition-transform duration-200 hover:translate-y-[-2px]">
                <FilterButton
                  item={food}
                  isSelected={selectedFood.includes(food)}
                  onClick={toggleFood}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Food Origin Filter */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">Food Origin</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {foodOrigins.map((origin) => (
              <div key={origin} className="transform transition-transform duration-200 hover:translate-y-[-2px]">
                <FilterButton
                  item={origin}
                  isSelected={selectedOrigin.includes(origin)}
                  onClick={toggleOrigin}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Filter */}
        <div className="flex-1 min-w-0 lg:max-w-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-800">Delivery</h3>
          </div>
          <div className="flex flex-col gap-2">
            {deliveryOptions.map((option) => (
              <div key={option.value} className="transform transition-transform duration-200 hover:translate-y-[-1px]">
                <DeliveryButton
                  option={option}
                  isSelected={deliveryFilter === option.value}
                  onClick={setDeliveryFilter}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters & Clear Button */}
      <div className="mt-6 pt-6 border-t border-gray-300">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Active Filters:</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">
              {selectedFood.length + selectedOrigin.length + (deliveryFilter !== 'all' ? 1 : 0)} applied
            </span>
          </div>
          
          {(selectedFood.length > 0 || selectedOrigin.length > 0 || deliveryFilter !== 'all') && (
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 
                       bg-white border border-gray-300 rounded-lg hover:bg-gray-50 
                       transition-all duration-200 hover:shadow-md active:scale-95"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBoard;