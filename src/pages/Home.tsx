import React, {useEffect, useRef} from 'react';
import qs from 'qs'
import Category from "../components/category/Category";
import Sort, {sortList} from "../components/Sort/SortPopup";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../redux/store";
import SortPopup from "../components/Sort/SortPopup";
import {selectFilter} from "../redux/filter/selectors";
import {selectPizzas} from "../redux/pizza/selectors";
import {fetchPizzas} from "../redux/pizza/asyncActions";
import {filter, setCurrentPage} from "../redux/filter/slice";


const Home: React.FC = () => {

    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const navigate = useNavigate()


    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter)

    const {items, status} = useSelector(selectPizzas)
    const dispatch = useAppDispatch()


    const setCategoryId = React.useCallback((id: number) => {
        dispatch(filter(id))
    }, [])

    const changePage = (num: number) => {
        dispatch(setCurrentPage(num))
    }


    const searchArr = items.filter((el: any) => el.title.toLowerCase().includes(searchValue.toLowerCase()))


    const getPizzas = async () => {
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
        const categorySort = categoryId > 0 ? `category=${categoryId}` : ''
        const replaceSort = sort.sortProperty.replace('-', '')

        dispatch(
            fetchPizzas({
            order,
            categorySort,
            replaceSort,
            currentPage: String(currentPage)
        }))
    }

    // useEffect(() => {
    //     if (window.location.search) {
    //         const params = (qs.parse(window.location.search.substring(1)) as unknown) as SearchPizzaParams
    //         const sort = sortList.find(obj => obj.sortProperty == params.categorySort)
    //         dispatch(setFilters({
    //             searchValue: params.order,
    //             categoryId: Number(params.categorySort),
    //             sort: sort || sortList[0],
    //             currentPage: Number(params.currentPage)
    //         }))
    //         isSearch.current = true
    //
    //     }
    // }, [])


    useEffect(() => {
        window.scroll(0, 0)

            getPizzas()
    }, [categoryId, sort.sortProperty, searchValue, currentPage])

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({
    //             sortProperty: sort.sortProperty,
    //             categoryId,
    //             currentPage
    //         })
    //         navigate(`?${queryString}`)
    //     }
    //     isMounted.current = true
    // }, [categoryId, sort.sortProperty, currentPage])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Category categoryId={categoryId} setCategoryId={setCategoryId}/>
                    <SortPopup value={sort} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        status === 'error' ? (
                            <h3>Пиццы не найдены :( попробуйте позже </h3>
                        ) :
                            status === 'loading' ? [...new Array(6)].map((_, idx) => <Skeleton key={idx}/>) :

                                searchArr.length ?
                                    searchArr.map((item: any) => (
                                        <PizzaBlock key={item.id}  {...item}/>
                                    )) : <h2>Такой пиццы еще нет!</h2>
                    }

                </div>
                <Pagination currentPage={currentPage} changePage={changePage}/>
            </div>
        </div>
    );
};

export default Home;