import { ChevronRight } from "lucide-react";

interface HeroProps {
  heroName: string;
  title?: string;
}
const Hero = ({ heroName, title }: HeroProps) => {
  return (
    <section className="relative flex h-80 flex-col items-center justify-center space-y-3 overflow-hidden bg-[#ffffff]/50">
      <img
        src="/images/heroes/shop-page-image.jpg"
        className="absolute -z-10 h-full w-full object-cover blur-[3px]"
      />
      <h1 className="font-poppinsMedium text-5xl">
        {title ? title : heroName}
      </h1>
      <div className="flex justify-center space-x-1">
        <span className="font-poppinsMedium text-base">Home</span>
        <ChevronRight color="#000000" size={22} />
        <span className="font-poppinsLight text-base">{heroName}</span>
      </div>
    </section>
  );
};

export default Hero;
