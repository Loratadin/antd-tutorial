import React, { PureComponent } from 'react';
import { Tabs } from 'antd';
import Header from './Header';
import Home from './Home';
import Cars from './Cars';
import Company from './Company';
import Order from './Order';
import { inventory } from '../dummyData';
const { TabPane } = Tabs;
export default class PagesContainer extends PureComponent {
    state = {
        activeKey: "home",
        favorites: [],
        carsInOrder: [],
        isReservationModalVisible: false,
        reservationCarDetails: undefined,
    }

    handleTabChange = key => this.setState({activeKey: key})

    handleSaveCarToFavorites = id => {
        const selectedCar = inventory.find(car => car.key === id);
        const isSelectedCarAlreadyInFavorites = this.state.favorites.includes(selectedCar);
        if (isSelectedCarAlreadyInFavorites) {
            this.setState({ favorites: this.state.favorites.filter(car => car !== selectedCar) });
        } else {
            this.setState({ favorites: [...this.state.favorites, selectedCar] });
        }
    }

    handleAddCarToOrder = (car, dates, formattedDates) => {
        this.setState({ carsInOrder: [...this.state.carsInOrder, car] });
    }

    toggleReservationModal = ( car={} ) => {
        this.setState({
            reservationCarDetails: this.state.reservationCarDetails ? undefined : car,
            isReservationModalVisible: !this.state.isReservationModalVisible,
        })
    }

    render() {
        const { activeKey, favorites, carsInOrder, reservationCarDetails, isReservationModalVisible } = this.state;
        return (
            <div className="pages-container">
                <Header />
                <Tabs defaultActiveKey="home" activeKey={activeKey} onChange={this.handleTabChange}>
                    <TabPane tab="Home" key="home">
                        <Home changeTab={this.handleTabChange}/>
                    </TabPane>
                    <TabPane tab="Cars" key="cars">
                        <Cars
                            saveCarToFavorites={this.handleSaveCarToFavorites}
                            addCarToOrder={this.handleAddCarToOrder}
                            favorites={favorites}
                            carsInOrder={carsInOrder}
                            reservationCarDetails={reservationCarDetails}
                            isReservationModalVisible={isReservationModalVisible}
                            toggleReservationModal={this.toggleReservationModal}
                        />
                    </TabPane>
                    <TabPane tab="Company" key="company" >
                        <Company/>
                    </TabPane>
                    <TabPane tab="Order" key="order">
                        <Order
                            carsInOrder={carsInOrder}
                            favorites={favorites}
                            saveCarToFavorites={this.handleSaveCarToFavorites}
                            reservationCarDetails={reservationCarDetails}
                            isReservationModalVisible={isReservationModalVisible}
                            toggleReservationModal={this.toggleReservationModal}
                            changeTab={this.handleTabChange}
                        />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
