import React, { PureComponent } from 'react';
import { Icon } from "antd";

export default class CarDetails extends PureComponent {
    render() {
        const { car } = this.props;
        return (
            <>
                <div key={car} className="details__top">
                    <div className="details-top__save"><Icon className="details-top__icon" type="heart"/> Save</div>
                </div>
                <div className="details__vehicle">{car.year} {car.make} {car.model}</div>
                <div className="details-top__price">MSRP: {car.msrp}</div>
                <div className="details__color">Exterior color: {car.exteriorColor}</div>
            </>
        )
    }
}