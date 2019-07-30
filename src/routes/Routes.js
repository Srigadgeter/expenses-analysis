// Package File Imports
import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Project File Imports
import { routes } from './RouteDatas';

// history variable assignment
const history = createBrowserHistory();

// RouteCreator Component
const RouteCreator = (route) => (
    <Route 
        exact 
        key = {route.path}
        path = {route.path}
        render = {() => (<route.component />)}
    />
)

// Router
// Routes Component
const Routes = () => {
    let routeDatas = Object.values(routes);

    return (
        <Router history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    { routeDatas.map(route => ( RouteCreator(route) )) }
                </Switch>
            </Suspense>
        </Router>
    )
}

// Export Statement
export default Routes;