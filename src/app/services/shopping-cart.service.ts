import { Injectable } from "@angular/core"
import { CartItem } from "../restaurant-detail/shopping-cart/cart-item.model"
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model"
import { NotificationService } from "./notification.service"

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor(private notificationService: NotificationService){

    }

    clear() {
        this.items = []
    }

    add(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQuantity(foundItem)
        } else {
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    remove(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }

    increaseQuantity(item: CartItem){
        item.quantity = item.quantity + 1
    }

    decreaseQuantity(item: CartItem){
        item.quantity = item.quantity - 1
        if(item.quantity === 0){
            this.remove(item)
        }
    }    
}