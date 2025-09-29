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
      className={`bg-[#FFFAF0E5] py-16 dark:bg-bg-color-dark md:py-20 ${
        pathname == "/restaurants" ? "lg:py-40" : "lg:py-28"
      }`}
    >
      <div className="container">
        <SectionTitle
          title="Restaurants"
          paragraph="Over 100+ high quality restaurants can be found here."
          center
        />

        <SearchInput />

        {/* <FilterBoard /> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {RestaurantsData.map((restaurant) => (
            <div key={restaurant.id} className="w-full">
              <SingleRestaurant restaurant={restaurant} />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-[#FC8A06] ">
          <button className="border-2 border-[#FC8A06] px-4 py-2 text-2xl rounded-lg">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
