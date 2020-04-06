import { CartItem } from "./cart-item.model"
import { MenuItem } from "../menu-item/menu-item.model"

export class ShoppingCartService {
    items: CartItem[] = []

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
    }

    remove(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
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