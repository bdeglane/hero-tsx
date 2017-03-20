import * as React from 'react';
import {
    Route,
    IndexRoute
} from 'react-router';

import {Hello} from '../component/Hello';
import DashboardPage from "../page/dashboardPage/index";

export const routes = (
    <Route path="/">
        <IndexRoute component={Hello}/>
        <Route path="dashboard"
               component={DashboardPage}/>
    </Route>
);