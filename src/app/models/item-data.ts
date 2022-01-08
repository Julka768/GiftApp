export class ItemData {
  name!: string;
  link!: string;
  price!: number;

  constructor(name: string, link: string, price: number) {
    this.name = name;
    this.link = link;
    this.price = price;
  }
}
