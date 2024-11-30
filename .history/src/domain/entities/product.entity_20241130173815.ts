export class Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
