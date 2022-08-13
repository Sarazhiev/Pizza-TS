import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../store";
import {getCartFromLS} from "../../utils/getCartFromLS";



export type CartItem = {
    imageUrl: string;
    title: string;
    price: number;
    size: number;
    type: string;
    id: string;
    count: number
}

interface CartSliceState {
    totalPrice: number;
    items: CartItem[]
}

const initialState: CartSliceState = {
    totalPrice: 0,
    items: getCartFromLS()
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItem: (state, action: PayloadAction <CartItem>) => {
            const findItem = state.items.find(item => item.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((acc, rec) => {
                return (rec.count * rec.price) + acc
            }, 0)
        },
        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find(item => item.id === action.payload)
            if (findItem) {
                findItem.count--
            }
            state.totalPrice = state.items.reduce((acc, rec) => {
                return (rec.count * rec.price) + acc
            }, 0)
        },

        removeItem: (state, action: PayloadAction <string>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const selectCart = (state: RootState) => state.cart
export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find(obj => obj.id === id)

export const {addItem, minusItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer