import React, { Component } from 'react';

import DashboardCard from './DashboardCard';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        let cards = [];
        for(let i=0;i<13;i++) {
            cards.unshift(<DashboardCard number={i} />)
        }

        return (
            <div className="dashboard">
                <div className="dashboard-title"><span className="font-mona">Dashboard</span></div>
                <div className="dashboard-cards-container">
                    <div className="dashboard-card add-new">
                        <span className="card-circle"><span className="card-circle-text font-mont-m">+</span></span>
                        <span className="card-title"><div className="card-title-text font-mona">Add New</div></span>
                    </div>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Dashboard;