import {createAsyncThunk} from "@reduxjs/toolkit";
import {Pizza, SearchPizzaParams} from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'users/fetchPizzasStatus', async (params) => {
        const {order, categorySort, replaceSort, currentPage} = params
        const {data} = await axios.get <Pizza[]>(`https://62e64f13de23e263792a4b39.mockapi.io/items?${categorySort}&sortBy=${replaceSort}&order=${order}&page=${currentPage}&limit=4&`)
        return data
    }
)