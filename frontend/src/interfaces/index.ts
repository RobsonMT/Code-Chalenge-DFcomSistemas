export interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  createdAt: string;
}

export interface Review {
  author: string;
  comment: string;
  rating: number;
}
