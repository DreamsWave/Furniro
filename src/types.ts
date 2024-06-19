export interface ProductReview {
  id: string;
  rating: number;
  text: string;
  createdAt: string;
  author: string;
}

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
}

export type ProductsSortByTypes = "default" | "price" | "name";
