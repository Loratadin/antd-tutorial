import React, { PureComponent } from 'react';

export default class Home extends PureComponent {
    render() {
        return (
            <div className="home__container">
                <div className="home__featured-image-wrap">
                    <img src="./assets/hero.jpg" className="home__featured-image" alt="car"/>
                </div>
                <div className="home__featured-content-wrap">
                    <div className="home__featured-content">Premium</div>
                    <div className="home__featured-content">Car Rental</div>
                    <div className="home__featured-content">In Dallas</div>
                </div>
            </div>
        )
    }
}