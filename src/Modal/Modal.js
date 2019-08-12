// Package File Imports
import React from 'react';
import Modal from 'react-bootstrap/Modal';

// StyleSheet Imports
import './Modal.css';

// Modal Type Data
const modalHeaderType = [
    {
        type: 'create',
        color: '#00ff0036'
    },
    {
        type: 'update',
        color: '#0cbdd441'
    },
    {
        type: 'delete',
        color: '#ff160171'
    }
]

// CustomModal Component
const CustomModal = ({
    size,
    children,
    showModal, 
    modalType,
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
        <Modal.Header style={{background: modalType ? modalHeaderType.filter(item => item.type === modalType)[0].color : null}}>
            <Modal.Title className="gradient-text-4 font-mona">
                {modalTitle.toUpperCase()}
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

// Export Statement
export default CustomModal;