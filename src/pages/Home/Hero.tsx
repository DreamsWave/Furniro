import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="min-h-[700px] bg-heroBackgroundImage bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="container mx-auto px-2 lg:px-6">
        <div className="bg-primary-light flex flex-col gap-4 items-start px-10 py-14 w-full lg:max-w-[50%] lg:ml-auto">
          <span className="text-text-color-100 font-semibold text-base">
            New Arrival
          </span>
          <h2 className="text-primary text-5xl font-bold">
            Discover Our New Collection
          </h2>
          <p className="text-text-color-100 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos
            velit natus accusamus itaque accusantium quas asperiores a
            necessitatibus iure.
          </p>
          <Button>Buy now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
