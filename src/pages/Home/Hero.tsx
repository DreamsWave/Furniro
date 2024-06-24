import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="flex min-h-[700px] items-center justify-center bg-[url('/images/heroes/home-page-image.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container-full">
        <div className="flex w-full flex-col items-start gap-4 bg-primary-light px-10 py-14 lg:ml-auto lg:max-w-[50%]">
          <span className="text-base font-semibold text-text-color-100">
            New Arrival
          </span>
          <h2 className="text-5xl font-bold text-primary">
            Discover Our New Collection
          </h2>
          <p className="mb-6 text-lg text-text-color-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos
            velit natus accusamus itaque accusantium quas asperiores a
            necessitatibus iure.
          </p>
          <Button linkTo="/shop">Buy now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
