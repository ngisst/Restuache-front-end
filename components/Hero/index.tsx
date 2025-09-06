import EmblaCarousel from "../EmblaCarousel";
import AddButton from "./add-button";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#ffecd1] pb-4 pt-[120px] dark:bg-gray-dark md:pt-[150px] xl:pt-[180px] 2xl:pt-[140px]"
      >
        <div className="container">
          <EmblaCarousel />
          <AddButton />
        </div>
      </section>
    </>
  );
};

export default Hero;
