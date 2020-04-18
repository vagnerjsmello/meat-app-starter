import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { ShoppingCartService } from "app/services/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "../order/order.model";
import { MEAT_API } from "app/app.api";


@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http) { }


    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQuantity(item: CartItem) {
        this.cartService.increaseQuantity(item)
    }

    decreaseQuantity(item: CartItem) {
        this.cartService.decreaseQuantity(item)
    }

    removeItem(item: CartItem) {
        this.cartService.remove(item)
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    checkOrder(order: Order): Observable<string> {
        const url = `${MEAT_API}/orders`
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(url, JSON.stringify(order), new RequestOptions({ headers : headers }))
                        .map(response => response.json())
                        .map((order) => order.id)
    }

    clear(){
        this.cartService.clear()
    }
}