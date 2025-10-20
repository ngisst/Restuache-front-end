import Image from "next/image";
import EmblaCarousel from "../EmblaCarousel";
import AddButton from "./add-button";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gray-50 pb-4 pt-10"
      >
        <div className="relative mb-20">
          <div className="absolute left-0 top-0 h-full w-full bg-black/50" />
          <Image
            src="/images/hero/hero.jpg"
            className="h-screen w-full object-cover"
            alt="hero image"
            width={1000}
            height={600}
          />
          <div className="text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   transform text-center text-white">
            <h3 className="text-5xl">Discover the most delicious dishes</h3>
            <p className="py-4 text-xl">
              The best restaurants in your city with fast delivery and special
              offers
            </p>
          </div>
        </div>
        <EmblaCarousel />
        {/* <AddButton /> */}
      </section>
    </>
  );
};

export default Hero;
