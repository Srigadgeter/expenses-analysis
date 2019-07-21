import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import './Modal.css';

const CustomModal = ({
    size,
    children,
    showModal, 
    closeModal, 
    modalTitle, 
    modalFooter
}) => (
    <Modal
        centered
        animation
        autoFocus
        size={size}
        show={showModal}
        onHide={closeModal}
    >
        <Modal.Header>
            <Modal.Title className="font-mona">
                {modalTitle}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            {
                modalFooter && 
                Array.isArray(modalFooter) &&  
                modalFooter.map((data, index) => (
                    <Button 
                        key={`btn${index}`}
                        variant={data.type ? data.type : null} 
                        onClick={data.functionality} 
                    >
                        {data.context ? data.context : null}
                    </Button>
                ))
            }
        </Modal.Footer>
    </Modal>
)

export default CustomModal;