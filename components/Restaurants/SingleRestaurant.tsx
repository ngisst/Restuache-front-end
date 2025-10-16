import { Restaurants } from "@/types/restaurants";
import Image from "next/image";
import Link from "next/link";

const SingleRestaurant = ({ restaurant }: { restaurant: Restaurants }) => {
  const { title, image, paragraph, link } = restaurant;
  return (
    <>
      <div
        className="wow fadeInUp group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
        data-wow-delay=".1s"
      >
        <Link href={link} className="relative block aspect-37/22 w-full">
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={link}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleRestaurant;
