import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { useRef, useState } from "react";
import Button from "@/components/Button";
import { cn } from "@/utils";
import img1 from "@/assets/images/home/inspirations-1.jpg";
import img2 from "@/assets/images/home/inspirations-2.jpg";
import img3 from "@/assets/images/home/Rectangle 37.jpg";
import img4 from "@/assets/images/home/Rectangle 40.jpg";
import { ArrowRight } from "lucide-react";

interface Inspiration {
  id: number;
  title: string;
  description: string;
  image: string;
}
const inspirations: Inspiration[] = [
  {
    id: 0,
    title: "Bed Room",
    description: "Inner Peace",
    image: img1,
  },
  {
    id: 1,
    title: "Living Room",
    description: "Inner Peace",
    image: img2,
  },
  {
    id: 2,
    title: "Kitchen",
    description: "Inner Peace",
    image: img3,
  },
  {
    id: 3,
    title: "Bathroom",
    description: "Inner Peace",
    image: img4,
  },
];

const Inspirations = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [currentInspiration, setCurrentInspiration] = useState<Inspiration>();

  function handleIndexChange(index: number) {
    const insp = getInspiration(index);
    setCurrentInspiration(insp);
  }

  function getInspiration(id: number) {
    return inspirations.find((insp) => insp.id === id);
  }

  return (
    <section className="flex flex-col items-center overflow-hidden bg-primary-light py-11">
      <div className="container grid grid-cols-1 gap-0 px-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <div className="mb-4 flex flex-col justify-center md:col-span-1">
          <h3 className="mb-2 font-poppinsBold text-4xl text-text-color-100">
            50+ Beautiful rooms inspiration
          </h3>
          <p className="mb-6 font-poppinsMedium text-base text-text-color-200">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <Button className="hidden w-fit md:flex" linkTo="/shop">
            Explore More
          </Button>
        </div>

        <Carousel
          onSelectedIndexChange={handleIndexChange}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mb-16 w-full md:col-start-2 md:col-end-4"
        >
          <CarouselContent className="max-h-[400px]">
            {inspirations.map((inspiration, index) => (
              <CarouselItem key={index} className="mx-3 basis-2/3 lg:basis-2/5">
                <div className="h-[580px]">
                  <img
                    src={inspiration.image}
                    alt={inspiration.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselDots className="md:left-1/2 md:w-auto md:-translate-x-1/2 lg:left-1/2 lg:w-auto lg:-translate-x-1/2" />
          <div
            className={cn(
              "absolute bottom-4 left-4 bg-white/80 md:bottom-6 md:left-6",
            )}
          >
            <div className="relative p-4 md:p-8 md:pb-6">
              <h4 className="mb-2 font-poppinsMedium text-sm text-text-color-200 md:text-base">
                0{currentInspiration ? currentInspiration.id + 1 : ""} —{" "}
                {currentInspiration?.title}
              </h4>
              <p className="font-poppinsSemibold text-xl md:text-[28px]">
                {currentInspiration?.description}
              </p>
              <Button
                className="group absolute bottom-0 left-full flex size-12 items-center justify-center p-0"
                linkTo={
                  currentInspiration?.id
                    ? `product/${currentInspiration.id}`
                    : "/shop"
                }
              >
                <ArrowRight className="size-6 stroke-white group-hover:stroke-primary" />
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
      <Button className="flex w-fit md:hidden">Explore More</Button>
    </section>
  );
};

export default Inspirations;
