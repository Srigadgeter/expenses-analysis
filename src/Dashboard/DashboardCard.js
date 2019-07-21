import React, { Component } from 'react';

class DashboardCard extends Component {
    render() {
        let textArray = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
        let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let mon = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        let randomValue = Math.floor(Math.random() * textArray.length);
        return (
            <div className="dashboard-card">
                <span className="card-spin-circle"></span>
                <span className="card-circle"><span className="card-circle-text font-mont-sb">{textArray[randomValue]}</span></span>
                <span className="card-title"><div className="card-title-text font-mona">{month[randomValue]} 2019</div></span>
            </div>
        )
    }
}

export default DashboardCard;