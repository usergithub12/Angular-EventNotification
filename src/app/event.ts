export class Event {
  title: string;
  description: string;
  img: string;

  constructor(title: string, description: string, img: string) {
    this.description = description;
    this.img = img;
    this.title = title;
  }
}
