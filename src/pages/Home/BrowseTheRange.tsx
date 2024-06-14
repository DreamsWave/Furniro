import BrowseTheRangeDiningImage from "@/assets/images/home/the-range-dining.jpg";
import BrowseTheRangeLivingImage from "@/assets/images/home/the-range-living.jpg";
import BrowseTheRangeBedroomImage from "@/assets/images/home/the-range-bedroom.jpg";
import { Link } from "react-router-dom";

const BrowseTheRange = () => {
  return (
    <section className="mt-14">
      <div className="container mx-auto px-2 flex flex-col items-center lg:px-6">
        <h2 className="font-poppinsBold text-4xl font-bold text-text-color-100 mb-3">
          Browse The Range
        </h2>
        <p className="font-poppins text-xl text-text-color-200 mb-14 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-row gap-5 w-full justify-center">
          <Link to="#" className="flex flex-col items-center group">
            <div className="overflow-hidden rounded-lg w-[100px] md:w-[200px] lg:w-auto">
              <img
                src={BrowseTheRangeDiningImage}
                alt="Browse The Range - Dining"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-poppinsSemibold text-lg transition-colors md:text-2xl md:mt-6 group-hover:text-primary">
              Dining
            </h3>
          </Link>
          <Link to="#" className="flex flex-col items-center group">
            <div className="overflow-hidden rounded-lg w-[100px] md:w-[200px] lg:w-auto">
              <img
                src={BrowseTheRangeLivingImage}
                alt="Browse The Range - Living"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-poppinsSemibold text-lg transition-colors md:text-2xl md:mt-6 group-hover:text-primary">
              Living
            </h3>
          </Link>
          <Link to="#" className="flex flex-col items-center group">
            <div className="overflow-hidden rounded-lg w-[100px] md:w-[200px] lg:w-auto">
              <img
                src={BrowseTheRangeBedroomImage}
                alt="Browse The Range - Bedroom"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 font-poppinsSemibold text-lg transition-colors md:text-2xl md:mt-6 group-hover:text-primary">
              Bedroom
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
