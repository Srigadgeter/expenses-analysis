import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { routes } from './RouteDatas';

const history = createBrowserHistory();

const RouteCreator = (route) => (
    <Route 
        exact 
        key = {route.path}
        path = {route.path}
        render = {() => (<route.component />)}
    />
)

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

export default Routes;