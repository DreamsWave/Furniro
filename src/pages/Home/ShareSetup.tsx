import shareSetupImage from "@/assets/images/home/share-setup.png";

const ShareSetup = () => {
  return (
    <section className="py-16 relative">
      <div className="w-full px-2 flex flex-col items-center lg:px-8">
        <h4 className="mb-2 font-poppinsSemibold text-base text-text-color-200 lg:text-xl">
          Share your setup with
        </h4>
        <h3 className="font-poppinsBold text-2xl text-text-color-100 lg:text-4xl">
          #FurniroFurniture
        </h3>
      </div>
      <img
        src={shareSetupImage}
        alt="Share setup image"
        className="w-full h-full min-h-[300px] max-h-[600px] object-cover md:object-contain"
      />
    </section>
  );
};

export default ShareSetup;
