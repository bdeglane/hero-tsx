import * as React from 'react';
import {connect} from 'react-redux';
import DashboardPage from './DashboardPage.tsx';
import {getHeroes} from '../../action/heroes'

export const mapStateToProps = (state: any): any => {
    return {
        heroes: state.heroes
    }
};

export const mapDispatchToProps = (dispatch: any): any => {
    return {
        getHeroes: () => {
            dispatch(getHeroes());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);