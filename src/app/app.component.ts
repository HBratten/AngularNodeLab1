import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  cart: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService
      .getAllItems()
      .subscribe(response => (this.cart = response));
  }
}
