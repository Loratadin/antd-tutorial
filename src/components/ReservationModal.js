import React, { PureComponent } from 'react';
import { Modal, Button } from "antd";

export default class ReservationModal extends PureComponent {
    handleConfirmReservation = () => {
        this.props.addCarToOrder(this.props.reservationCarDetails);
    }
    render() {
        const { reservationCarDetails, toggleReservationModal, isReservationModalVisible } = this.props;
        return (
            <Modal
                onCancel={toggleReservationModal}
                visible={isReservationModalVisible}
                wrapClassName="reservation_modal"
                width={600}
                footer={null}
            >
                <div className="reserv_car-title">{reservationCarDetails.year} {reservationCarDetails.make} {reservationCarDetails.model}</div>
                <div className="reserv_message">Please choose dates and time of reservation.</div>
                <div className="reserv_buttons-wrap">
                    <Button onClick={toggleReservationModal} className="reserv_cancel-button">Cancel</Button>
                    <Button onClick={this.handleConfirmReservation} type="primary" className="reserv_confirm-button">Confirm Reservation</Button>
                </div>
            </Modal>
        );
    }
}