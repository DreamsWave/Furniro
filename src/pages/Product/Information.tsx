import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Product } from "@/types";
import InfoGrid from "@/components/InfoGrid";
import Reviews from "./Reviews";

interface InformationProps {
  product: Product;
}

const Information = ({ product }: InformationProps) => {
  const hasImages = product.images && product.images.length > 0;

  return (
    <section>
      <div className="py-12">
        <Tabs
          defaultValue="description"
          className="font-poppins text-base text-text-color-400"
        >
          <TabsList className="mb-9 flex justify-center space-x-4 font-poppinsMedium text-sm text-text-color-400 md:space-x-8 md:text-base lg:space-x-12 lg:text-lg">
            <TabsTrigger
              value="description"
              className="data-[state=active]:text-black"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              className="data-[state=active]:text-black"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:text-black"
            >
              Reviews [{product.reviews ? product.reviews.length : 0}]
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="description container">
            {product.fullDescription && (
              <div className="container-sm mb-8">
                <div
                  dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                ></div>
              </div>
            )}
            <div>
              {hasImages && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-7">
                  {product.images &&
                    product.images.slice(0, 2).map((image, index) => (
                      <div
                        key={index}
                        className="h-[350px] overflow-hidden rounded-lg"
                      >
                        <img
                          src={image}
                          alt={`Image ${index}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                </div>
              )}
              {!hasImages && product.images && (
                <div className="h-[350px] overflow-hidden rounded-lg">
                  <img
                    src={product.images[0]}
                    alt="Product Image"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="additional" className="container-sm">
            <InfoGrid className="pt-8" />
          </TabsContent>
          <TabsContent value="reviews" className="container-sm">
            <Reviews className="pt-8" product={product} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Information;
