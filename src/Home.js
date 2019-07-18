import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { routes } from './routes/RouteDatas';

class Home extends Component {
    render() {
        return (
            <div>
                EXPENSES ANALYSIS
                <br />
                <Link to={routes.DASHBOARD.path}><button className='font-mont-r'>Go to <span className='font-mont-sb'>Dashboard</span></button></Link>
            </div>
        )
    }
}

export default Home;
