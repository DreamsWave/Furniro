import { cn } from "@/utils";

interface InfoGridProps {
  isComparison?: boolean;
  className?: string;
}
const InfoGrid = ({ isComparison = false, className }: InfoGridProps) => {
  return (
    <section
      className={cn(
        className,
        "container font-poppins text-xl text-text-color",
      )}
    >
      <div className="mb-20">
        <h3 className={cn("mb-7 font-poppinsMedium text-3xl text-text-color")}>
          General
        </h3>
        <div className={cn("grid grid-cols-2 gap-2")}>
          <ul className="flex flex-col gap-8">
            <li>Sales Package</li>
            <li>Model Number</li>
            <li>Secondary Material</li>
            <li>Configuration</li>
            <li>Upholstery Material</li>
            <li>Upholstery Color</li>
          </ul>
          <ul className="flex flex-col gap-8">
            <li>1 sectional sofa</li>
            <li>TFCBLIGRBL6SRHS</li>
            <li>Solid Wood</li>
            <li>L-shaped</li>
            <li>Fabric + Cotton</li>
            <li>Bright Grey & Lion</li>
          </ul>
          {isComparison && (
            <ul className="flex flex-col gap-8">
              <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>Solid Wood</li>
              <li>L-shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          )}
        </div>
      </div>
      <div className="mb-20">
        <h3 className="mb-7 font-poppinsMedium text-3xl text-text-color">
          Product
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <ul className="flex flex-col gap-8">
            <li>Filling Material</li>
            <li>Finish Type</li>
            <li>Adjustable Headrest</li>
            <li>Maximum Load Capacity</li>
            <li>Origin of Manufacture</li>
          </ul>
          <ul className="flex flex-col gap-8">
            <li>Foam</li>
            <li> Bright Grey & Lion</li>
            <li>No</li>
            <li>280 KG</li>
            <li>India</li>
          </ul>
          {isComparison && (
            <ul className="flex flex-col gap-8">
              <li>Matte</li>
              <li>Bright Grey & Lion</li>
              <li>yes</li>
              <li>300 KG</li>
              <li>India</li>
            </ul>
          )}
        </div>
      </div>
      <div className="mb-20">
        <h3 className="mb-7 font-poppinsMedium text-3xl text-text-color">
          Dimensions
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <ul className="flex flex-col gap-8">
            <li>Width</li>
            <li>Height</li>
            <li>Depth</li>
            <li>Weight</li>
            <li>Seat Height</li>
            <li>Leg Height</li>
          </ul>
          <ul className="flex flex-col gap-8">
            <li>265.32 cm</li>
            <li>76 cm</li>
            <li>167.76 cm</li>
            <li>45 KG</li>
            <li>41.52 cm</li>
            <li>5.46 cm</li>
          </ul>
          {isComparison && (
            <ul className="flex flex-col gap-8">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>65 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>
          )}
        </div>
      </div>
      <div>
        <h3 className="mb-7 font-poppinsMedium text-3xl text-text-color">
          Warranty
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <ul className="flex flex-col gap-8">
            <li>Warranty Summary</li>
            <li>Warranty Service Type</li>
            <li>Covered in Warranty</li>
            <li>Not Covered in Warranty</li>
            <li>Domestic Warranty</li>
          </ul>
          <ul className="flex flex-col gap-8">
            <li>1 Year Manufacturing Warranty</li>
            <li>
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </li>
            <li>Warranty Against Manufacturing Defect</li>
          </ul>
          {isComparison && (
            <ul className="flex flex-col gap-8">
              <li>1.2 Year Manufacturing Warranty</li>
              <li>
                For Warranty Claims or Any Product Related Issues Please Email
                at support@xyz.com
              </li>
              <li>
                Warranty of the product is limited to manufacturing defects
                only.
              </li>
              <li>
                The Warranty Does Not Cover Damages Due To Usage Of The Product
                Beyond Its Intended Use And Wear & Tear In The Natural Course Of
                Product Usage.
              </li>
              <li>3 Months</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;
