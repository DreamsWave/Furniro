export interface Product {
  id: string;
  title: string;
  description: string;
  currency: string;
  price: number;
  discountPercent: number | null;
  image: string;
  isNew: boolean;
}

export type ProductsSortByTypes = "default" | "price" | "name";
