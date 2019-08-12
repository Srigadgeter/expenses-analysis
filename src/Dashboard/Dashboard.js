// Package File Imports
import React, { Component } from 'react';
import { Dropdown, Container, Col, Row, Alert } from 'react-bootstrap';

// Project File Imports
import DashboardCard from './DashboardCard';
import Modal from '../Modal/Modal';

// StyleSheet Imports
import './Dashboard.css';

// Months Array
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Error Messages
const ErrorMessages = [
    'All fields are required!',
    'Year should be mentioned',
    'Month should be selected',
    'Year should be numbers only',
    'Year should not starts with 0',
    'Couldn\'t make Future Analysis',
    'Length of the year field should be 4'
];

// Dashboard Component
class Dashboard extends Component {
    state = {
        year: '',
        month: '',
        cards: [],
        errorMsg: '',
        showModal: false,
        showAlert: false
    }

    // Add New Card Modal Trigger Handler
    addNew = () => {
        this.setState({ showModal: true });
    }

    // Modal Close Handler
    closeAddNewModal = () => {
        this.setState({
            year: '',
            month: '',
            errorMsg: '',
            showModal: false,
            showAlert: false
        });
    }

    // Year Input Handler
    handleYearChanged = e => {
        let year = e.target.value;
        let currentYear = new Date().getFullYear();

        // Year Field OnChange Validation
        let errorMsg = !year ? ErrorMessages[1] : 
                        year.length !== 4 ? ErrorMessages[6] : 
                        !(/^\d{4}$/.test(year)) ? ErrorMessages[3] : 
                        !(/^[1-9]/.test(year)) ? ErrorMessages[4] : 
                        year > currentYear ? ErrorMessages[5] : '';
        errorMsg ?
            this.setState({
                errorMsg,
                year: '',
                showAlert: true,
            }) :
            this.setState({
                showAlert: false
            })

        if(!errorMsg && year) {
            this.setState({
                year
            })
        }            
    }

    // Month Dropdown Selection Handler
    handleMonthSelected = e => {
        let month = Months[e];
        this.setState({ month });
    }

    // Overall Validation Function
    validationFunction = () => {
        let { month, year } = this.state;
        let errorMsg = !year && !month ? ErrorMessages[0] : 
                        !year && month ? ErrorMessages[1] : 
                        year && !month ? ErrorMessages[2] : '';
        if(errorMsg) {
            this.setState({
                errorMsg,
                showAlert: true,
            });
        }
        return errorMsg;
    }

    // Add New Card
    addAnalysisCard = () => {
        let errorMsg = this.validationFunction();
        let { month, year, cards } = this.state;
        if(!errorMsg) {
            let data = {
                year: year,
                month: month
            }
            cards.unshift(data);
            this.setState({ 
                data: {}, 
                year: '', 
                month: '', 
                errorMsg: '',
                showModal: false,
                showAlert: false
            });
        }
    }

    // Modal Footer Buttons
    modalFooterButtonData = [
        {
            type: 'sec',
            context: 'Close',
            functionality: this.closeAddNewModal
        },
        {
            type: 'pri',
            context: 'Add',
            functionality: this.addAnalysisCard
        }
    ]

    render() {
        let { year, month, cards, errorMsg, showModal, showAlert } = this.state;

        let data = {
            initial: month.charAt(0),
            name: `${month.slice(0, 3)} ${year}`
        }

        let modalBody = (
            <Container>
                <Row>
                    <Col md={5} className="sample-card-container">
                        <div className="dashboard-card sample-card">
                            <span className="card-spin-circle"></span>
                            <span className="card-circle"><span className="card-circle-text font-mont-sb">{data.initial}</span></span>
                            <span className="card-title"><div className="card-title-text gradient-text-2 font-mona">{data.name}</div></span>
                        </div>
                    </Col>
                    <Col md={7} className="fields">
                        <Row>
                            <Col>
                                <span className="field-names">
                                    Enter the Year
                                </span>
                            </Col>
                            <Col>
                                <span className="field-names">
                                    Select a Month
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input 
                                    type="type" 
                                    maxLength="4" 
                                    placeholder='YYYY' 
                                    className="form-control" 
                                    onChange={this.handleYearChanged}
                                />
                            </Col>
                            <Col>
                                <Dropdown onSelect={e => this.handleMonthSelected(e)}>
                                    <Dropdown.Toggle variant="default" id="custom-dropdown">
                                        {month ? month : 'Month'}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Header>Months</Dropdown.Header>
                                        <Dropdown.Divider />
                                        {
                                            Months.map((month, index) => (
                                                <Dropdown.Item key={month} eventKey={index}>{month}</Dropdown.Item>
                                            ))
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Alert 
                                    show={showAlert} 
                                    variant="danger" 
                                >
                                    {errorMsg}
                                </Alert>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
        
        return (
            <div className="dashboard" style={{minHeight: window.innerHeight}}>
                <div className="dashboard-title"><span className="font-mona">Dashboard</span></div>
                <div className="dashboard-cards-container">
                    <div className="dashboard-card add-new" onClick={this.addNew}>
                        <span className="card-circle"><span className="card-circle-text gradient-text-2 font-mont-m">+</span></span>
                    </div>
                    {cards.map((card, index) => (
                        <DashboardCard data={card} key={`card_${index}`} />
                    ))}
                </div>
                <Modal
                    size = 'lg' 
                    modalType = 'create'
                    showModal = {showModal} 
                    closeModal = {this.closeAddNewModal} 
                    modalTitle = 'Add New Month Analysis' 
                    modalFooter = {this.modalFooterButtonData} 
                >
                    {modalBody}
                </Modal>
            </div>
        )
    }
}

// Export Statement
export default Dashboard;