import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {CartItem, CartSliceState} from "./types";
import {getCartFromLS} from "../../utils/getCartFromLS";
import {calcTotalPrice} from "../../utils/calcTotalPrice";





const {items, totalPrice} = getCartFromLS()

const initialState: CartSliceState = {
    totalPrice,
    items
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
            state.totalPrice = calcTotalPrice(state.items)
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

export const {addItem, minusItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer