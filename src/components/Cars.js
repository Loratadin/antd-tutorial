import React, { PureComponent } from 'react';
import CarDetails from "./CarDetails";
import { inventory } from "../dummyData";

export default class Cars extends PureComponent {
    render() {
        return (
            <div className="cars__container">
                <div className="cars__background-image-wrap">
                    <img src="./assets/interior.jpg" className="cars__background-image" alt="car"/>
                </div>
                <div className="cars__portfolio-wrap">
                    <div className="cars-portfolio__filters">Filters</div>
                    <div className="cars-portfolio__results">
                        {inventory && inventory.map(car => (
                            <div key={car} className="cars-portfolio__record">
                                <div className="cars-portfolio__record-info-wrap">
                                    <CarDetails
                                        car={car}
                                        saveCarToFavorites={this.props.saveCarToFavorites}
                                        addCarToOrder={this.props.addCarToOrder}
                                        favorites={this.props.favorites}
                                        carsInOrder={this.props.carsInOrder}
                                    />
                                </div>
                                <div className="cars-portfolio__record-image-wrap">
                                    <img src={car.imageUrl} className="cars-portfolio__image" alt="car"/>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}