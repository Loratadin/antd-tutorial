import React, { PureComponent } from 'react';
import { Modal, Button } from "antd";

export default class ReservationModal extends PureComponent {
    render() {
        return (
            <Modal
                onCancel={this.props.toggleReservationModal}
                visible={this.props.isReservationModalVisible}
                wrapClassName="reservation_modal"
                width={400}
                footer={null}
            >
                <Button>modal</Button>
            </Modal>
        );
    }
}