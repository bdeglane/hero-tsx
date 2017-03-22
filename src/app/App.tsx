import * as React from 'react';
import {browserHistory} from 'react-router';
// import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'
import Route from './router/Route';
import Store from "./core/Store";

const styles = require('./style/main.css');

export default class App extends React.Component<any,any> {
    private store: Store;
    private history: any;

    constructor() {
        super();
        this.store = new Store();
        this.history = syncHistoryWithStore(browserHistory, this.store.getStore());
    }

    render() {
        return (
            <Provider store={this.store.getStore()}>
                <Route history={this.history}/>
            </Provider>
        );
    }
}