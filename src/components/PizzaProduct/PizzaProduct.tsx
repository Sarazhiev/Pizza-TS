import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const PizzaProduct: React.FC = () => {
    const navigate = useNavigate()
    const [pizza, setPizza] = useState <{
        imageUrl: string,
        title: string,
        price: number
        rating: number,
        sizes: number
    }> ()
    const {id} = useParams()
    useEffect(() => {
        const fetchPizza = async () => {
           try {
               const {data} = await axios.get(`https://62e64f13de23e263792a4b39.mockapi.io/items/${'' + id}`)
               setPizza(data)
           } catch (error) {
               alert('такой пиццы нет!')
               navigate('/')
           }
        }
        fetchPizza()
    }, [])

    if (!pizza) {
        return <>Загрузка...</>
    }

    return (
        <div>
            <h2>{pizza.title}</h2>
            <img src={pizza.imageUrl} alt=""/>
            <p>{pizza.price}</p>
            <p>{pizza.rating}</p>
            <p>{pizza.sizes}</p>
        </div>
    );
};

export default PizzaProduct;



















