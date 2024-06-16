import { Product } from "./types";
import image1 from "@/assets/images/home/our-products-1.jpg";
import image2 from "@/assets/images/home/our-products-2.jpg";
import image3 from "@/assets/images/home/our-products-3.jpg";
import image4 from "@/assets/images/home/our-products-4.jpg";
import image5 from "@/assets/images/home/our-products-5.jpg";
import image6 from "@/assets/images/home/our-products-6.jpg";
import image7 from "@/assets/images/home/our-products-7.jpg";
import image8 from "@/assets/images/home/our-products-8.jpg";

const products: Product[] = [
  {
    id: "0",
    title: "Syltherine",
    description: "Stylish cafe chair",
    currency: "Rp",
    price: 3500000,
    discountPercent: 30,
    image: image1,
    isNew: false,
  },
  {
    id: "1",
    title: "Leviosa",
    description: "Stylish cafe chair",
    currency: "Rp",
    price: 2500000,
    discountPercent: null,
    image: image2,
    isNew: false,
  },
  {
    id: "2",
    title: "Lolito",
    description: "Luxury big sofa",
    currency: "Rp",
    price: 14000000,
    discountPercent: 50,
    image: image3,
    isNew: false,
  },
  {
    id: "3",
    title: "Respira",
    description: "Outdoor bar table and stool",
    currency: "Rp",
    price: 500000,
    discountPercent: null,
    image: image3,
    isNew: true,
  },
  {
    id: "4",
    title: "Grifo",
    description: "Night lamp",
    currency: "Rp",
    price: 1500000,
    discountPercent: null,
    image: image4,
    isNew: false,
  },
  {
    id: "5",
    title: "Muggo",
    description: "Small mug",
    currency: "Rp",
    price: 150000,
    discountPercent: null,
    image: image5,
    isNew: true,
  },
  {
    id: "6",
    title: "Pingky",
    description: "Cute bed set",
    currency: "Rp",
    price: 14000000,
    discountPercent: 50,
    image: image6,
    isNew: true,
  },
  {
    id: "7",
    title: "Potty",
    description: "Minimalist flower pot",
    currency: "Rp",
    price: 500000,
    discountPercent: null,
    image: image7,
    isNew: true,
  },
  {
    id: "8",
    title: "Grifo",
    description: "Night lamp",
    currency: "Rp",
    price: 1500000,
    discountPercent: null,
    image: image8,
    isNew: false,
  },
];

export default products;
