export default interface Product {
  id: number;
  name: string;
  specifications: Specification;
  picture: string;
}

interface Specification {
  color: string;
  weight: string;
  storage: string;
  price: number;
  currency: string;
}

export interface Cart {
  product: Product;
  quantity: number;
}
