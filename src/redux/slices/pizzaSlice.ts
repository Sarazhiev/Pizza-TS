import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {RootState} from "../store";
import sort from "../../components/Sort/SortPopup";
import {Sort} from "./filterSlice";





type Pizza = {
    imageUrl: string;
    title: string;
    price: number;
    sizes: number[];
    types: number[];
    id: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING
}


export type SearchPizzaParams = {
    order: string;
    categorySort: string;
    replaceSort: string;
    currentPage: string;
}

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'users/fetchPizzasStatus', async (params) => {
        const {order, categorySort, replaceSort, currentPage} = params
        const {data} = await axios.get <Pizza[]>(`https://62e64f13de23e263792a4b39.mockapi.io/items?${categorySort}&sortBy=${replaceSort}&order=${order}&page=${currentPage}&limit=4&`)
        return data
    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        }
    },




    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        })
    }
    // extraReducers: {
    //     [fetchPizzas.pending]: (state) => {
    //         state.status = 'loading'
    //         state.items = []
    //     },
    //     [fetchPizzas.fulfilled]: (state, action) => {
    //         state.items = action.payload
    //         state.status = 'success'
    //     },
    //     [fetchPizzas.rejected]: (state, action) => {
    //         state.status = 'error'
    //         state.items = []
    //     }
    // }
})

export const selectPizzas = (state: RootState) => state.pizza

export const {setItems} = pizzaSlice.actions

export default pizzaSlice.reducer