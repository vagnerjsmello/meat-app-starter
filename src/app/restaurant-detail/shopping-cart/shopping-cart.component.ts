import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from "./shopping-cart.service";
@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items():any[]{
    return this.shoppingCartService.items
  }

  removeItem(item : any){
    return this.shoppingCartService.remove(item)
  }

  addItem(item: any){
    return this.shoppingCartService.add(item)
  }
  clear(){
    return this.shoppingCartService.clear()
  }
  total(): number{
    return this.shoppingCartService.total()
  }

}
