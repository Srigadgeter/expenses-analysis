import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routes } from './routes/RouteDatas';

class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard
                <br />
                <Link to={routes.HOME.path}><button className='font-mont-r'>Go to <span className='font-mont-sb'>Home</span></button></Link>
            </div>
        )
    }
}

export default Dashboard;