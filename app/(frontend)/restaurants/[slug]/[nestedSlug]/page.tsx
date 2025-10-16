"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Share2,
  Clock,
  Users,
  ChefHat,
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Info,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

export default function MealDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Regular");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const meal = {
    id: "grilled-salmon",
    name: "Grilled Atlantic Salmon",
    shortDescription:
      "Fresh salmon fillet grilled to perfection with roasted vegetables",
    fullDescription:
      "Our signature Atlantic salmon is sourced fresh daily from sustainable fisheries. The fillet is seasoned with our house blend of herbs and spices, then grilled over an open flame to achieve the perfect char while maintaining its tender, flaky texture. Served alongside a medley of roasted seasonal vegetables including asparagus, bell peppers, and baby potatoes, all finished with our signature lemon butter sauce.",
    price: 24.99,
    originalPrice: 28.99,
    images: [
    "/images/hero/meal-1.jpg",
    "/images/hero/meal-2.jpg",
    "/images/hero/meal-3.jpg",
  ],
    category: "Main Course",
    subcategory: "Seafood",
    prepTime: 25,
    servings: 1,
    calories: 420,
    rating: 4.8,
    reviewCount: 156,
    isPopular: true,
    chef: "Chef Marcus Rodriguez",
    chefSpecialty: "Seafood & Mediterranean Cuisine",
    ingredients: [
      "Fresh Atlantic Salmon (8oz)",
      "Asparagus spears",
      "Red bell peppers",
      "Baby potatoes",
      "Lemon butter sauce",
      "Fresh dill",
      "Sea salt",
      "Black pepper",
      "Olive oil",
      "Garlic",
    ],
    allergens: ["Fish", "Dairy"],
    dietaryInfo: ["Gluten-Free", "Keto-Friendly", "High Protein"],
    nutritionalInfo: {
      calories: 420,
      protein: "42g",
      carbs: "8g",
      fat: "24g",
      fiber: "3g",
      sodium: "380mg",
      sugar: "4g",
    },
    sizes: [
      { name: "Regular", price: 24.99, description: "8oz fillet" },
      { name: "Large", price: 32.99, description: "12oz fillet" },
    ],
    addons: [
      { name: "Extra Vegetables", price: 3.99 },
      { name: "Garlic Bread", price: 2.99 },
      { name: "Side Caesar Salad", price: 4.99 },
      { name: "Upgrade to Sweet Potato", price: 1.99 },
    ],
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "2 days ago",
        comment:
          "Absolutely incredible! The salmon was cooked to perfection and the vegetables were so fresh. Will definitely order again!",
      },
      {
        id: 2,
        name: "Mike Chen",
        rating: 5,
        date: "1 week ago",
        comment:
          "Best salmon I've had in the city. The lemon butter sauce is amazing. Highly recommend!",
      },
      {
        id: 3,
        name: "Emily Davis",
        rating: 4,
        date: "2 weeks ago",
        comment:
          "Great meal overall. The salmon was delicious, though I wish there were more vegetables. Still very satisfied!",
      },
    ],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getCurrentPrice = () => {
    const sizePrice =
      meal.sizes.find((size) => size.name === selectedSize)?.price ||
      meal.price;
    const addonsPrice = selectedAddons.reduce(
      (total, addon) => total + addon.price,
      0,
    );
    return sizePrice + addonsPrice;
  };

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((item) => item.name === addon.name);
      if (exists) {
        return prev.filter((item) => item.name !== addon.name);
      } else {
        return [...prev, addon];
      }
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 md:pt-[150px] xl:pt-[180px] 2xl:pt-[140px]">
      {/* Header */}
      <div className="bg-white shadow-xs">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <button className="flex items-center text-gray-600 transition-colors hover:text-blue-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Menu
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={meal.images[currentImageIndex]}
                alt={meal.name}
                className="h-96 w-full object-cover"
              />

              {/* Badges */}
              <div className="absolute left-4 top-4 flex gap-2">
                {meal.isPopular && (
                  <span className="flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    Popular
                  </span>
                )}
                {meal.originalPrice > meal.price && (
                  <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
                    Save ${(meal.originalPrice - meal.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="absolute right-4 top-4 flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isFavorite ? "fill-current text-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
                <button className="rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {meal.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-20 flex-1 overflow-hidden rounded-lg border-2 transition-all ${
                    currentImageIndex === index
                      ? "border-blue-500"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${meal.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            {/* Header Info */}
            <div className="mb-6">
              <div className="mb-2 flex items-start justify-between">
                <h1 className="text-3xl font-bold text-gray-900">
                  {meal.name}
                </h1>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    ${getCurrentPrice().toFixed(2)}
                  </div>
                  {meal.originalPrice > meal.price && (
                    <div className="text-lg text-gray-400 line-through">
                      ${meal.originalPrice}
                    </div>
                  )}
                </div>
              </div>

              <p className="mb-4 text-lg text-gray-600">
                {meal.shortDescription}
              </p>

              {/* Rating & Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center">
                  <div className="mr-2 flex items-center">
                    {renderStars(meal.rating)}
                  </div>
                  <span className="font-medium">{meal.rating}</span>
                  <span className="ml-1 text-gray-500">
                    ({meal.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="mr-1 h-4 w-4" />
                  {meal.prepTime} min
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="mr-1 h-4 w-4" />
                  Serves {meal.servings}
                </div>
              </div>
            </div>

            {/* Chef Info */}
            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                  <ChefHat className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{meal.chef}</div>
                  <div className="text-sm text-gray-600">
                    {meal.chefSpecialty}
                  </div>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="mb-3 font-semibold text-gray-900">Choose Size</h3>
              <div className="grid grid-cols-2 gap-3">
                {meal.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`rounded-lg border-2 p-3 transition-all ${
                      selectedSize === size.name
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-medium">{size.name}</div>
                    <div className="text-sm text-gray-600">
                      {size.description}
                    </div>
                    <div className="text-sm font-semibold text-blue-600">
                      ${size.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Add-ons (Optional)
              </h3>
              <div className="space-y-2">
                {meal.addons.map((addon) => (
                  <label
                    key={addon.name}
                    className="flex cursor-pointer items-center justify-between rounded-lg border p-3 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedAddons.some(
                          (item) => item.name === addon.name,
                        )}
                        onChange={() => toggleAddon(addon)}
                        className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-900">{addon.name}</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      +${addon.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mb-6 rounded-xl border bg-white p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-medium text-gray-900">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${(getCurrentPrice() * quantity).toFixed(2)}
                  </span>
                </div>
                <button className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Dietary Info */}
            <div className="flex flex-wrap gap-2">
              {meal.dietaryInfo.map((info) => (
                <span
                  key={info}
                  className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
                >
                  <CheckCircle className="mr-1 inline h-3 w-3" />
                  {info}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {["description", "ingredients", "nutrition", "reviews"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`border-b-2 px-1 py-2 text-sm font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </nav>
          </div>

          <div className="mt-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="leading-relaxed text-gray-700">
                  {meal.fullDescription}
                </p>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">
                      Ingredients
                    </h4>
                    <ul className="space-y-2">
                      {meal.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="mr-2 h-4 w-4 shrink-0 text-green-500" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">
                      Allergens
                    </h4>
                    <div className="space-y-2">
                      {meal.allergens.map((allergen) => (
                        <div
                          key={allergen}
                          className="flex items-center text-orange-700"
                        >
                          <AlertTriangle className="mr-2 h-4 w-4 shrink-0" />
                          Contains {allergen}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {Object.entries(meal.nutritionalInfo).map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-lg bg-gray-50 p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-gray-900">
                      {value}
                    </div>
                    <div className="text-sm capitalize text-gray-600">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {meal.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <div className="font-medium text-gray-900">
                          {review.name}
                        </div>
                        <div className="flex items-center">
                          {renderStars(review.rating)}
                          <span className="ml-2 text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
