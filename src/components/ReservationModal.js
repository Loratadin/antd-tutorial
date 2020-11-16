import React, { PureComponent } from 'react';
import { Modal, Button, DatePicker, message } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
export default class ReservationModal extends PureComponent {
    state = {}

    handleConfirmReservation = () => {
        if (this.state.reservationDateAndTime) {
            this.props.addCarToOrder(this.props.reservationCarDetails, this.state.reservationDateAndTime, this.state.formattedReservationDateAndTime);
            this.props.toggleReservationModal();
        } else {
            message.error("Please choose dates and time for your reservation.")
        }
    }

    onDateSelection = (value, dateString) => {
        this.setState({reservationDateAndTime: value, formattedReservationDateAndTime: dateString})
    }

    disablePastDates = (current) => {
        return current && current < moment().endOf("day");
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
                <RangePicker
                    showTime={{ format: 'hh:mma' }}
                    format="MMM Do HH:MM"
                    onChange={this.onDateSelection}
                    disabledDate={current => this.disablePastDates(current)}
                />
                <div className="reserv_buttons-wrap">
                    <Button onClick={toggleReservationModal}>Cancel</Button>
                    <Button onClick={this.handleConfirmReservation} type="primary">Confirm Reservation</Button>
                </div>
            </Modal>
        );
    }
}