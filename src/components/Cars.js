import React, { PureComponent } from 'react';
import { inventory } from "../dummyData";

export default class Cars extends PureComponent {
    render() {
        console.log("CAR", inventory[0].imageUrl)
        return (
            <div className="cars__container">
                <div className="cars__background-image-wrap">
                    <img src="./assets/interior.jpg" className="cars__background-image" alt="car"/>
                </div>
                <div className="cars__portfolio-wrap">
                    {inventory && inventory.map(car => (
                        <React.Fragment>
                            <div className="cars-portfolio__info-wrap ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.
                            </div>
                            <div className="cars-portfolio__image-wrap" >
                                <img src={car.imageUrl} className="cars-portfolio__image" alt="car"/>
                                </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}