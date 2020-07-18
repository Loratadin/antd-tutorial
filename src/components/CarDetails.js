import React, { PureComponent } from 'react';
import { formatCurrency } from "../utilities";
import { Icon } from "antd";

export default class CarDetails extends PureComponent {
    render() {
        const { car, favorites } = this.props;
        const isFavorite = favorites && favorites.includes(car);
        return (
            <>
                <div onClick={() => this.props.saveCarToFavorites(car.key)} className="details__top" data-testid="favorite">
                    <Icon className={`details-top__icon ${isFavorite && "details-top__icon-red"}`} type="heart" />
                    <div className="details-top__save">{isFavorite ? "Saved" : "Save"}</div>
                </div>
                <div className="details__vehicle">{car.year} {car.make} {car.model}</div>
                <div className="details-top__price">MSRP: {formatCurrency(car.msrp)}</div>
                <div className="details__color">Exterior color: {car.exteriorColor}</div>
            </>
        )
    }
}