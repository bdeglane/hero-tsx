import * as React from 'react';
import {Router} from 'react-router';
import {routes} from './routes';

interface RouteProps {
    history: any
}

export default class Route extends React.Component<RouteProps,undefined> {
    render() {
        return <Router history={this.props.history}
                       routes={routes}
                       onUpdate={() => window.scrollTo(0, 0)}/>

    }
}