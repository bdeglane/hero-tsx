import * as React from 'react';
import {Link} from 'react-router';
import Hero from "../../model/Hero";
// to prevent import typescript error
// http://stackoverflow.com/a/35015146
const styles = require('./dashboardPage.css');

// @connect(mapStateToProps, mapDispatchToProps)
export default class DashboardPage extends React.Component<any,any> {
    componentDidMount() {
        this.props.getHeroes();
    }

    render() {
        const heroes = this.props.heroes.map((hero: Hero, id: number) => {
            return (
                <Link to={`/hero/${hero.id}`}
                      className={styles.col_1_4}
                      key={id}>
                    <span className={`${styles.module} ${styles.hero}`}>
                         <h4>{hero.name}</h4>
                         </span>
                </Link>
            );
        });

        return (
            <div>
                <h3>Top Heroes</h3>
                <div className={`${styles.grid} ${styles.grid_pad}`}>
                    {heroes}
                </div>
            </div>
        );
    }
}