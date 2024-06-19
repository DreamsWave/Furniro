import { Gem, Headset, ShieldCheck, Truck } from "lucide-react";

const Benefits = () => {
  return (
    <section className="bg-primary-light">
      <div className="container mx-auto px-2 py-14 md:py-24 lg:px-8">
        <div className="mx-auto grid w-fit grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:grid-cols-4">
          <div className="flex items-center space-x-2">
            <Gem size={60} />
            <div>
              <h4 className="mb-2 font-poppinsSemibold text-lg text-text-color-100 md:text-2xl">
                High Quality
              </h4>
              <p className="font-poppinsMedium text-base text-text-color-400 md:text-xl">
                Crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck size={60} />
            <div>
              <h4 className="mb-2 font-poppinsSemibold text-lg text-text-color-100 md:text-2xl">
                Warranty Protection
              </h4>
              <p className="font-poppinsMedium text-base text-text-color-400 md:text-xl">
                Over 2 years
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Truck size={60} />
            <div>
              <h4 className="mb-2 font-poppinsSemibold text-lg text-text-color-100 md:text-2xl">
                Free Shipping
              </h4>
              <p className="font-poppinsMedium text-base text-text-color-400 md:text-xl">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Headset size={60} />
            <div>
              <h4 className="mb-2 font-poppinsSemibold text-lg text-text-color-100 md:text-2xl">
                24 / 7 Support
              </h4>
              <p className="font-poppinsMedium text-base text-text-color-400 md:text-xl">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
