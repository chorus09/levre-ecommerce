export type Category =
  | "EVERY DAY"
  | "FASHION"
  | "TRAVEL"
  | "WORK"
  | "ACCESSORIES"
  | "UNISEX"
  | "CLOTHING";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  description?: string;
  images: string[]; 
  tags?: string[];
}

export interface ProductDetails extends Product {
  longDescription?: string;
  material?: string;
  dimensions?: string;
}

export interface FilterOptions {
  categories?: Category[];
  priceRange?: {
    min: number;
    max: number;
  };
  search?: string;
}
