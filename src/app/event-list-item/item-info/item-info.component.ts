import { Component, OnInit } from "@angular/core";
import { Event } from "../../event";
@Component({
  selector: "app-item-info",
  templateUrl: "./item-info.component.html",
  styleUrls: ["./item-info.component.scss"]
})
export class ItemInfoComponent implements OnInit {
  title = "Availiable events: ";

  events: Event[] = [
    new Event(
      "SOLID Principles: Explanation and examples",
      "S — Single responsibility principle    O — Open closed principle  L — Liskov substitution principle   I — Interface segregation principle   D — Dependency Inversion principle",
      "https://devx.blog/uploads/programming/intro.png"
    ),
    new Event(
      "React",
      "sdfhsjodkfj",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRxqIETFZzSpg-QmsJYo4-GsA8hJgYBKRWWSu9x8DA_k5L1W3T"
    ),
    new Event(
      "MVC",
      "sdfhsjodkfj",
      "http://avante.biz/wp-content/uploads/Php-programmer-wallpaper/Php-programmer-wallpaper32.jpg"
    ),
    new Event(
      "UML",
      "sdfhsjodkfj",
      "https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
