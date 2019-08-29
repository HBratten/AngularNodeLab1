import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  cart: any;
  showEditForm: boolean = false;
  itemToEdit: object;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getAllItems();
  }
  getAllItems() {
    this.cartService.getAllItems().subscribe(response => {
      this.cart = response;
    });
  }

  setItemToEdit(item): void {
    this.itemToEdit = item;
  }

  toggleEditForm(): void {
    this.showEditForm = !this.showEditForm;
  }

  deleteItem(id: number): void {
    this.cartService.removeItem(id).subscribe(response => {
      this.cart = response;
    });
  }

  updateItem(form: NgForm, id: number): void {
    this.cartService.updateItem(form.value, id).subscribe(response => {
      this.cart = response;
    });
    this.toggleEditForm();
  }

  addItem(form: NgForm): void {
    this.cartService.addItem(form.value).subscribe(response => {
      this.cart = response;
      form.reset();
    });
  }
}
