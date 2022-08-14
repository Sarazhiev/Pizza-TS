export type Pizza = {
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

export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}
export type SearchPizzaParams = {
    order: string;
    categorySort: string;
    replaceSort: string;
    currentPage: string;
}