import React, { PureComponent } from 'react';

export default class Company extends PureComponent {
    render() {
        return (
            <div className="company-container">
                <div className="featured-image-wrap">
                    <img src="./assets/interior.jpg" className="featured-image" alt="car"/>
                </div>
            </div>
        )
    }
}