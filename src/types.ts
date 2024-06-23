import { DefaultColors } from "tailwindcss/types/generated/colors";

export type ProductColor = keyof DefaultColors;
export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type ProductCategory = "sofas" | "lamps" | "desks";
export type Tag = "Home" | "Shop" | "Chair" | "Sofa";

export interface ProductReview {
  id: string;
  rating: number;
  text: string;
  createdAt: string;
  author: string;
  avatar: string;
}

export interface ProductDetails {
  general: {
    salesPackage: string;
    modelNumber: string;
    secondaryMaterial: string;
    configuration: string;
    upholsteryMaterial: string;
    upholsteryColor: string;
  };
  product: {
    fillingMaterial: string;
    finishType: string;
    adjustableHeadrest: string;
    maximumLoadCapacity: string;
    originOfManufacture: string;
  };
  dimensions: {
    width: string;
    height: string;
    depth: string;
    weight: string;
    seatHeight: string;
    legHeight: string;
  };
  warranty: {
    warrantySummary: string;
    warrantyServiceType: string;
    coveredInWarranty: string;
    notCoveredInWarranty: string;
    domesticWarranty: string;
  };
}

export type ProductDetailsCategory = keyof ProductDetails;

export interface Product {
  id: string;
  title: string;
  description: string;
  currency: string;
  price: number;
  discountPercent: number | null;
  image: string;
  isNew: boolean;
  rating: number;
  reviews: ProductReview[];
  fullDescription?: string;
  images?: string[];
  colors?: ProductColor[];
  sizes?: ProductSize[];
  sku?: string;
  category?: ProductCategory;
  tags?: Tag[];
  details: ProductDetails;
}

export type ProductsSortByTypes = "default" | "price" | "name";
