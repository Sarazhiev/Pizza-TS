import {CartItem} from "../redux/cart/types";

export const calcTotalPrice = (items: CartItem[]) => {
    return  items.reduce((acc, rec) => (rec.count * rec.price) + acc, 0)
}