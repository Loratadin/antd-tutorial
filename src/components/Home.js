import React, { PureComponent } from 'react';

export default class Home extends PureComponent {
    render() {
        return (
            <div className={"home-container"}>
                <div className={"featured-image-wrap"}>
                    <img src="./assets/hero.jpg" className={"featured-image"} alt="car"/>
                </div>
            </div>
        )
    }
}