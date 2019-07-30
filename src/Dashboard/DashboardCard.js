// Package File Imports
import React from 'react';

// DashboardCard Component
const DashboardCard = ({ data }) => (
    <div className="dashboard-card">
        <span className="card-spin-circle"></span>
        <span className="card-circle"><span className="card-circle-text font-mont-sb">{data.month.charAt(0)}</span></span>
        <span className="card-title"><div className="card-title-text gradient-text-2 font-mona">{`${data.month.slice(0, 3)} ${data.year}`}</div></span>
    </div>
)

// Export Statement
export default DashboardCard;