export class ItemData {
  name!: string;
  link!: string;
  price!: number;
  linkPhoto!: string;

  constructor(name: string, link: string, price: number, linkPhoto: string) {
    this.name = name;
    this.link = link;
    this.price = price;
    this.linkPhoto = linkPhoto;
  }
}
