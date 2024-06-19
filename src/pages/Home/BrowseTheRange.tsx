import BrowseTheRangeDiningImage from "@/assets/images/home/the-range-dining.jpg";
import BrowseTheRangeLivingImage from "@/assets/images/home/the-range-living.jpg";
import BrowseTheRangeBedroomImage from "@/assets/images/home/the-range-bedroom.jpg";
import { Link } from "react-router-dom";

const BrowseTheRange = () => {
  return (
    <section className="mt-14">
      <div className="container flex flex-col items-center">
        <h2 className="mb-3 font-poppinsBold text-4xl font-bold text-text-color-100">
          Browse The Range
        </h2>
        <p className="mb-14 text-center font-poppins text-xl text-text-color-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex w-full flex-row justify-center gap-5">
          <Link to="#" className="group flex flex-col items-center">
            <div className="w-[100px] overflow-hidden rounded-lg md:w-[200px] lg:w-auto">
              <img
                src={BrowseTheRangeDiningImage}
                alt="Browse The Range - Dining"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-poppinsSemibold text-lg transition-colors group-hover:text-primary md:mt-6 md:text-2xl">
              Dining
            </h3>
          </Link>
          <Link to="#" className="group flex flex-col items-center">
            <div className="w-[100px] overflow-hidden rounded-lg md:w-[200px] lg:w-auto">
              <img
                src={BrowseTheRangeLivingImage}
                alt="Browse The Range - Living"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-poppinsSemibold text-lg transition-colors group-hover:text-primary md:mt-6 md:text-2xl">
              Living
            </h3>
          </Link>
          <Link to="#" className="group flex flex-col items-center">
            <div className="w-[100px] overflow-hidden rounded-lg md:w-[200px] lg:w-auto">
              <img
                src={BrowseTheRangeBedroomImage}
                alt="Browse The Range - Bedroom"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-poppinsSemibold text-lg transition-colors group-hover:text-primary md:mt-6 md:text-2xl">
              Bedroom
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
