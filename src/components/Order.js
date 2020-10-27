import React, { PureComponent } from 'react';
import { formatCurrency, sufficientArray } from "../utilities";
import { Button } from "antd";

export default class Order extends PureComponent {
    state = {
        favoritesVisible: false,
    }

    toggleFavorites = () => this.setState({favoritesVisible: !this.state.favoritesVisible})

    render() {
        const { favorites, carsInOrder } = this.props;
        const { favoritesVisible } = this.state;
        return (
            <div className="order__container">
                <div className="order__background-image-wrap">
                    <img src="./assets/order-bg.jpg" className="order__background-image" alt="car"/>
                </div>
                <div className="order__wrap">
                    {carsInOrder && carsInOrder.map((car, idx) => (
                        <div key={`order-${idx}`} className="order__car-reserved">
                            <div className="order__image-wrap">
                                <img src={car.imageUrl} className="order__image" alt="car"/>
                            </div>
                            <div className="order__vehicle">{car.year} {car.make} {car.model}</div>
                            <div className="order__price">MSRP: {formatCurrency(car.msrp)}</div>
                            <div className="order__color">Exterior color: {car.exteriorColor}</div>
                            <Button type="primary" className="order__checkout">
                                Checkout
                            </Button>
                        </div>
                    ))}
                    {sufficientArray(favorites) && <div onClick={this.toggleFavorites} className="order__favorites-link">{favoritesVisible ? "Hide Favorites" : "View Favorites"}</div>}
                    {sufficientArray(favorites) && favoritesVisible && (
                        <div>fav</div>
                    )}
                </div>
            </div>
        )
    }
}