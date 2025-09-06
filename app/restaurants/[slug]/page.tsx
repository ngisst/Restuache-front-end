"use client";

import { MapComponent } from "@/components/Map";
import { MapProvider } from "@/providers/map-provider";
import { useState } from "react";
import RestaurantMenu from "@/components/Menu";
import Reservation from "@/components/Reservation";

const restaurant = {
  name: "Bistro Mediterranean",
  image: "/images/restaurants/restaurant-1.jpg",
  rating: 4.8,
  reviewCount: 342,
  cuisine: "Mediterranean",
  priceRange: "$$-$$$",
  openingHours: "11:00 AM - 10:00 PM",
  address: "123 Harbor Street, Downtown",
  phone: "+1 (555) 123-4567",
  website: "www.bistromediterranean.com",
  description:
    "Experience the authentic flavors of the Mediterranean at Bistro Mediterranean. Our chef combines traditional recipes with modern culinary techniques to create an unforgettable dining experience. Fresh ingredients sourced locally and imported specialties from Greece, Italy, and Spain come together in our warm, inviting atmosphere.",
  specialties: [
    "Fresh Seafood",
    "Homemade Pasta",
    "Wood-fired Pizza",
    "Vegetarian Options",
  ],
  ambiance:
    "Casual yet elegant dining with Mediterranean-inspired decor, perfect for romantic dinners, family gatherings, or business meetings.",
};

const SingleRestaurantPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#ffecd1]">
      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-40">
        <div className="flex gap-8">
          {/* Left Side - Image and Details (3/4 width) */}
          <div className="w-3/4">
            {/* Restaurant Image */}
            <div className="relative mb-6">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="h-96 w-full rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* Restaurant Details */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-start justify-between">
                <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                  {restaurant.name}
                </h2>
                <div>{restaurant.rating}</div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center">
                    {/* <Clock className="mr-3 h-5 w-5 text-gray-600" /> */}
                    <div>
                      <span className="font-medium text-gray-900">Hours:</span>
                      <p className="text-gray-700">{restaurant.openingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    {/* <MapPin className="mr-3 h-5 w-5 text-gray-600" /> */}
                    <div>
                      <span className="font-medium text-gray-900">
                        Address:
                      </span>
                      <p className="text-gray-700">{restaurant.address}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    {/* <Phone className="mr-3 h-5 w-5 text-gray-600" /> */}
                    <div>
                      <span className="font-medium text-gray-900">Phone:</span>
                      <p className="text-gray-700">{restaurant.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    {/* <Globe className="mr-3 h-5 w-5 text-gray-600" /> */}
                    <div>
                      <span className="font-medium text-gray-900">
                        Website:
                      </span>
                      <p className="cursor-pointer text-blue-600 hover:text-blue-800">
                        {restaurant.website}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mt-6">
                <h3 className="mb-3 font-semibold text-gray-900">
                  Our Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {restaurant.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <MapProvider>
              <MapComponent />
            </MapProvider>
          </div>

          {/* Right Side - Description (1/4 width) */}
          <div className="w-1/4">
            <div className="sticky top-8 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                About Us
              </h2>

              <p className="mb-4 leading-relaxed text-gray-700">
                {restaurant.description}
              </p>

              <div className="border-t pt-4">
                <h3 className="mb-2 font-semibold text-gray-900">Ambiance</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {restaurant.ambiance}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="w-full rounded-lg bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-[#13434a]"
                >
                  Make Reservation
                </button>
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="w-full rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-200"
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RestaurantMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Reservation
        isReservationOpen={isReservationOpen}
        setIsReservationOpen={setIsReservationOpen}
      />
    </div>
  );
};

export default SingleRestaurantPage;
