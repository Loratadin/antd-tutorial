import React, { PureComponent } from 'react';
import { Input } from "antd";

export default class Order extends PureComponent {
    render() {
        const { favorites, carsInOrder } = this.props;
        return (
            <div className="order__container">
                <div className="order__background-image-wrap">
                    <img src="./assets/order-bg.jpg" className="order__background-image" alt="car"/>
                </div>
                <div className="order__wrap">
                    <Input />
                    <div>Favorites: {favorites.length}</div>
                    <div>Reserved: {carsInOrder.length}</div>
                </div>
            </div>
        )
    }
}