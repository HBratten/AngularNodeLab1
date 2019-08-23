import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}
  getAllItems() {
    return this.http.get("http://localhost:5100/cart-items");
  }
}
