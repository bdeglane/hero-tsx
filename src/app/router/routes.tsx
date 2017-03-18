import * as React from 'react';
import {
    Route,
    IndexRoute
} from 'react-router';

import {Hello} from '../component/Hello';

export const routes = (
    <Route path="/">
        <IndexRoute component={Hello}/>
    </Route>
);