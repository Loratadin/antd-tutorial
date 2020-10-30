import React, { PureComponent } from 'react';
import CarDetails from "./CarDetails";
import ReservationModal from "./ReservationModal";
import { inventory } from "../dummyData";

export default class Cars extends PureComponent {
    render() {
        const {
            carsInOrder,
            addCarToOrder,
            saveCarToFavorites,
            favorites,
            isReservationModalVisible,
            reservationCarDetails,
            toggleReservationModal,
        } = this.props;
        return (
            <div className="cars__container">
                <div className="cars__background-image-wrap">
                    <img src="./assets/interior.jpg" className="cars__background-image" alt="car"/>
                </div>
                <div className="cars__portfolio-wrap">
                    <div className="cars-portfolio__filters">Filters</div>
                    <div className="cars-portfolio__results">
                        {inventory && inventory.map((car, idx) => (
                            <div key={`car-${idx}`} className="cars-portfolio__record">
                                <div className="cars-portfolio__record-info-wrap">
                                    <CarDetails
                                        car={car}
                                        saveCarToFavorites={saveCarToFavorites}
                                        favorites={favorites}
                                        carsInOrder={carsInOrder}
                                        toggleReservationModal={toggleReservationModal}
                                    />
                                </div>
                                <div className="cars-portfolio__record-image-wrap">
                                    <img src={car.imageUrl} className="cars-portfolio__image" alt="car"/>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isReservationModalVisible && (
                        <ReservationModal
                            reservationCarDetails={reservationCarDetails}
                            toggleReservationModal={toggleReservationModal}
                            isReservationModalVisible={isReservationModalVisible}
                            addCarToOrder={addCarToOrder}
                        />
                    )}
                </div>
            </div>
        )
    }
}