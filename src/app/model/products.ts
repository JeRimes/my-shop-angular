import Product from './types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 12",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "256GB",
      price: 1000,
      currency: "$"
    },
    picture: "/assets/images/iphone12.png"
  },
  {
    id: 2,
    name: "Airpods",
    specifications: {
      color: "white",
      weight: "50g",
      storage: "N/A",
      price: 200,
      currency: "$"
    },
    picture: "/assets/images/airpods.png"
  },
  {
    id: 3,
    name: "Samsung S22",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "512GB",
      price: 900,
      currency: "$"
    },
    picture: "/assets/images/samsung22.png"
  },
  {
    id: 4,
    name: "Samsung Note10",
    specifications: {
      color: "black",
      weight: "250g",
      storage: "256GB",
      price: 950,
      currency: "$"
    },
    picture: "/assets/images/samsungnote10.png"
  },
  {
    id: 5,
    name: "Phone 14",
    specifications: {
      color: "white",
      weight: "250g",
      storage: "256GB",
      price: 1300,
      currency: "$"
    },
    picture: "/assets/images/iphone14.png"
  }
]
