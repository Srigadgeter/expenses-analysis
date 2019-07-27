import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { routes } from '../routes/RouteDatas';

import './SplashScreen.css';

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push(routes.DASHBOARD.path);
        }, 4000)
    }

    render() {
        return (
            <div className="splashScreen" style={{width: window.innerWidth, height: window.innerHeight}}>
                <span className="project-title font-mona">EXPENSES ANALYSIS</span>
            </div>
        )
    }
}

export default withRouter(SplashScreen);