export type CartItem = {
    imageUrl: string;
    title: string;
    price: number;
    size: number;
    type: string;
    id: string;
    count: number
}

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[]
}