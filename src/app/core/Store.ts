import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk';
import {logger} from './helper/logger';
import {crashReporter} from './helper/crashReporter';
import {
    initialState,
    saveState
} from './helper/state';
import {reducers} from '../reducer/index';

const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default class Store {

    private store: any;

    constructor() {
        this.store = createStore(
            reducers,
            initialState(),
            composeEnhancers(
                applyMiddleware(
                    thunk,
                    logger,
                    crashReporter
                )
            )
        );
        // Store state in local storage
        this.store.subscribe(() => {
            saveState(this.store.getState());
        });
    }

    getStore(): any {
        return this.store;
    }
}