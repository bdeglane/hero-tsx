import * as React from 'react';
import {Link} from 'react-router';
import Hero from "../../model/Hero";
// import * as styles from './dashboardPage.css';

// @connect(mapStateToProps, mapDispatchToProps)
export default class DashboardPage extends React.Component<any,any> {
    componentDidMount() {
        this.props.getHeroes();
    }

    render() {
        const heroes = this.props.heroes.map((hero: Hero, id: number) => {
            return (
                <Link to={`/hero/${hero.id}`}
                      className="col-1-4"
                      key={id}>
                    <span className="module hero">
                         <h4>{hero.name}</h4>
                         </span>
                </Link>
            );
        });

        return (
            <div>
                <h3>Top Heroes</h3>
                <div className="grid grid-pad">
                    {heroes}
                </div>
            </div>
        );
    }
}