import React, { PureComponent } from 'react';

export default class Company extends PureComponent {
    render() {
        return (
            <div className="company__container">
                <div className="company__background-image-wrap">
                    <img src="./assets/interior.jpg" className="company__background-image" alt="car"/>
                </div>
                <div className="company__portfolio-wrap">
                    <div className="company-portfolio__info-wrap ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.
                    </div>
                    <div className="company-portfolio__image-wrap ">
                        <img src="./assets/employee-1.jpg" className="company-portfolio__image" alt="employee"/>
                    </div>
                    <div className="company-portfolio__image-wrap ">
                        <img src="./assets/employee-2.jpg" className="company-portfolio__image" alt="employee"/>
                    </div>
                    <div className="company-portfolio__info-wrap ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.
                    </div>
                    <div className="company-portfolio__info-wrap ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.
                    </div>
                    <div className="company-portfolio__image-wrap ">
                        <img src="./assets/employee-3.jpg" className="company-portfolio__image" alt="employee"/>
                    </div>
                    <div className="company-portfolio__info-wrap ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.
                    </div>
                    <div className="company-portfolio__image-wrap ">
                        <img src="./assets/employee-4.jpg" className="company-portfolio__image" alt="employee"/>
                    </div>
                </div>
            </div>
        )
    }
}