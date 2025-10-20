"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleRestaurant from "./SingleRestaurant";
import RestaurantsData from "./RestaurantsData";
// import FilterBoard from "../FilterBoard";
import SearchInput from "../Search";
import { usePathname } from "next/navigation";

const Restaurants = () => {
  const pathname = usePathname();

  return (
    <section
      id="restaurant"
      className={`min-h-screen bg-gray-50 pt-28`}
    >
      <div className="container">
        <div className="px-4 pt-16 pb-12 text-center">
          <h1 className="mb-4 text-5xl font-black text-gray-900 md:text-6xl">
            Restaurants
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Over 100+ high quality restaurants can be found here.
          </p>
        </div>

        <SearchInput />

        {/* <FilterBoard /> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {RestaurantsData.map((restaurant) => (
            <div key={restaurant.id} className="w-full">
              <SingleRestaurant restaurant={restaurant} />
            </div>
          ))}
        </div>
        <div className="text-primary mt-12 text-center">
          <button className="border-primary rounded-lg border-6 px-4 py-2 text-2xl">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
