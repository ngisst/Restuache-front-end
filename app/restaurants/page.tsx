import Restaurants from "@/components/Restaurants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants Page",
  description: "",
};

const AllRestaurantsPage = () => {
  return (
    <>
      <Restaurants />
    </>
  );
};

export default AllRestaurantsPage;
