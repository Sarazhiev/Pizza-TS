import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilterSliceState, Sort, SortPropertyEnum} from "./types";

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.RATING_DESC
    },
    currentPage: 1
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filter: (state, action: PayloadAction <number>) => {
            state.categoryId = action.payload
        },
        setSearchValue: (state, action: PayloadAction <string>) => {
            state.searchValue = action.payload
        },
        setSort: (state, action: PayloadAction <Sort>) => {
            state.sort = action.payload
        },
        setCurrentPage: (state, action: PayloadAction <number>) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action: PayloadAction <FilterSliceState>) => {
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            state.sort = action.payload.sort
        }

    },
})

export const {filter, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer