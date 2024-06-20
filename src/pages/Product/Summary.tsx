import { Product } from "@/types";
import Gallery from "./Gallery";
import Header from "./Header";
import Actions from "./Actions";

interface SummaryProps {
  product: Product;
}
const Summary = ({ product }: SummaryProps) => {
  return (
    <section className="grid-col-1 md:grid-col-2 container grid gap-x-20 gap-y-10 py-8 pb-14 md:grid-cols-[repeat(2,_1fr)]">
      <Header product={product} className="md:col-span-2 md:col-start-2" />
      <Gallery
        product={product}
        className="md:col-span-1 md:row-span-2 md:row-start-1"
      />
      <Actions product={product} className="md:col-span-2 md:col-start-2" />
    </section>
  );
};

export default Summary;
