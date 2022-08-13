import React from 'react';
import empty from '../../assets/img/empty-cart.png'
import {Link} from "react-router-dom";

const PizzaCartEmpty: React.FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу
            </p>
            <img src={empty} alt="Empty cart"/>

                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
        </div>
);
};

export default PizzaCartEmpty;