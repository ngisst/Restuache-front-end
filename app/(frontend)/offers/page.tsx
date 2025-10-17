"use client";

import React, { useState } from "react";
import { Flame, Clock, Users, Star } from "lucide-react";

export default function OffersPage() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: "Blazing Combo Bundle",
      badge: "HOTTEST DEAL",
      badgeColor: "from-red-500 to-orange-500",
      description: "Burger + Fries + Drink",
      originalPrice: 24.99,
      discountedPrice: 14.99,
      discount: 40,
      image: "🍔",
      features: ["Flame-grilled burger", "Crispy fries", "Any soft drink"],
      timing: "Limited time",
    },
    {
      id: 2,
      title: "Feast for Two",
      badge: "FAMILY SPECIAL",
      badgeColor: "from-green-500 to-emerald-500",
      description: "2 Mains + 2 Sides + Dessert",
      originalPrice: 49.99,
      discountedPrice: 34.99,
      discount: 30,
      image: "🍽️",
      features: ["Choose any 2 mains", "2 sides of choice", "Shared dessert"],
      timing: "Available daily",
    },
    {
      id: 3,
      title: "Midnight Cravings",
      badge: "LATE NIGHT OFFER",
      badgeColor: "from-purple-500 to-indigo-500",
      description: "2 Items + Free Appetizer",
      originalPrice: 32.99,
      discountedPrice: 17.99,
      discount: 45,
      image: "🌙",
      features: ["Any 2 items", "Free starter", "After 10 PM"],
      timing: "10 PM - 2 AM",
    },
    {
      id: 4,
      title: "Breakfast Champion",
      badge: "MORNING POWER",
      badgeColor: "from-yellow-400 to-amber-500",
      description: "Full breakfast spread",
      originalPrice: 18.99,
      discountedPrice: 10.99,
      discount: 42,
      image: "🥞",
      features: ["Pancakes/Eggs", "Toast & butter", "Coffee/Juice"],
      timing: "6 AM - 11 AM",
    },
    {
      id: 5,
      title: "Veggie Paradise",
      badge: "HEALTHY CHOICE",
      badgeColor: "from-lime-500 to-green-600",
      description: "3 Vegan dishes + Smoothie",
      originalPrice: 28.99,
      discountedPrice: 18.99,
      discount: 34,
      image: "🥗",
      features: [
        "3 vegan options",
        "Premium smoothie",
        "Sustainable packaging",
      ],
      timing: "All day",
    },
    {
      id: 6,
      title: "Sweet Indulgence",
      badge: "DESSERT LOVER",
      badgeColor: "from-pink-500 to-rose-500",
      description: "Dessert Sampler Pack",
      originalPrice: 22.99,
      discountedPrice: 12.99,
      discount: 43,
      image: "🍰",
      features: ["4 dessert pieces", "Ice cream", "Whipped cream"],
      timing: "Evenings 5-10 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black pt-28">
      {/* Header */}
      <div className="px-4 pt-16 pb-12 text-center">
        <h1 className="mb-4 text-5xl font-black text-white md:text-6xl">
          Hot Offers 🔥
        </h1>
        <p className="text-lg text-gray-300 md:text-xl">
          Unbeatable deals that'll make your taste buds sing
        </p>
      </div>

      {/* Offers Grid */}
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`group relative transform cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105`}
              onClick={() => setSelectedOffer(offer)}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

              {/* Discount Badge */}
              <div
                className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${offer.badgeColor} rounded-lg px-3 py-1 text-xs font-black text-white`}
              >
                -{offer.discount}%
              </div>

              {/* Status Badge */}
              <div className="absolute top-16 right-4 z-20 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {offer.badge}
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col p-6">
                {/* Emoji Image */}
                <div className="mb-4 text-6xl transition-transform duration-300 group-hover:scale-110">
                  {offer.image}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-2xl font-black text-white transition-colors group-hover:text-yellow-300">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm text-gray-300">
                  {offer.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex-1">
                  {offer.features.slice(0, 2).map((feature, idx) => (
                    <div
                      key={idx}
                      className="mb-1 flex items-center gap-2 text-sm text-gray-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Timing */}
                <div className="mb-4 flex items-center gap-2 text-xs text-gray-400">
                  <Clock size={14} />
                  {offer.timing}
                </div>

                {/* Price Section */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-3xl font-black text-transparent">
                      ${offer.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${offer.originalPrice}
                    </span>
                  </div>
                  <button className="w-full transform rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-black text-black transition-all duration-200 hover:from-yellow-300 hover:to-orange-400 hover:shadow-lg">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedOffer && (
        <div
          className="fixed inset-0 top-20 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">{selectedOffer.image}</div>
            <h2 className="mb-2 text-3xl font-black text-white">
              {selectedOffer.title}
            </h2>
            <p className="mb-4 text-gray-300">{selectedOffer.description}</p>
            <div className="mb-6 rounded-lg bg-gray-900/50 p-4">
              {selectedOffer.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="mb-2 flex items-center gap-3 text-sm text-gray-300"
                >
                  <Flame size={16} className="text-orange-500" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="mb-6 flex items-center justify-between text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Clock size={16} /> {selectedOffer.timing}
              </span>
            </div>
            <div className="mb-6">
              <p className="mb-2 text-sm text-gray-400">Regular Price</p>
              <p className="text-lg text-gray-500 line-through">
                ${selectedOffer.originalPrice}
              </p>
              <p className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-4xl font-black text-transparent">
                ${selectedOffer.discountedPrice}
              </p>
            </div>
            <button className="mb-3 w-full rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 py-4 font-black text-black transition-all duration-200 hover:from-yellow-300 hover:to-orange-400">
              Order This Deal
            </button>
            <button
              className="w-full rounded-xl border-2 border-gray-600 py-3 font-bold text-gray-300 transition-colors hover:border-gray-400"
              onClick={() => setSelectedOffer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
