import React, { PureComponent } from 'react';

export default class Cars extends PureComponent {
    state= {
        cars: null,
        error: false
    }
    componentDidMount() {
        this.getCars()
    }
    getCars = async() => {
        try { 
            const response = await fetch('https://cars/api');
            if (response.ok) { 
                const data = await response.json();
                this.setState({cars: data})
        } else {
            this.setState({error: true})
        }
        } catch (e) { 
            this.setState ({error: true})
        }
    } 

    render() {
        const { cars } = this.state
        return (
            <div className="cars__container">
                <div className="cars__background-image-wrap">
                    <img src="./assets/cars-background.jpg" className="cars__background-image" alt="car"/>
                </div>
                <div className="cars__portfolio-wrap">
                    {cars && cars.map(car => (
                        <React.Fragment>
                            <div className="cars-portfolio__info-wrap ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a pellentesque sit.
                            </div>
                            <div className="cars-portfolio__image-wrap ">
                                <img src="./assets/employee-1.jpg" className="cars-portfolio__image" alt="employee"/>
                                </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}