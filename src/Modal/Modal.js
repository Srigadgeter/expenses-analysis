import React from 'react';
import Modal from 'react-bootstrap/Modal';

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
            <Modal.Title className="gradient-text-4 font-mona">
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
                    <button 
                        key={`btn${index}`} 
                        onClick={data.functionality} 
                        className={`btn-${data.type}`} 
                    >
                        {data.context ? data.context : null}
                    </button>
                ))
            }
        </Modal.Footer>
    </Modal>
)

export default CustomModal;