import React from 'react';
import './DetailsCard.scss';
import { NavLink, BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { DetailsContent, TutorialsContent, CodeContent } from './Content';

const Card = () => {
    return(
        <Router>
            <div className="card">
                <div className="nav">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to="/detail" activeclassname="active">Details</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tutiroals" activeclassname="active">Tutiroals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/code" activeclassname="active">Code</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <Switch>
                        <Route path="/detail">
                            <DetailsContent />
                        </Route>
                        <Route path="/tutiroals">
                            <TutorialsContent />
                        </Route>
                        <Route path="/code">
                            <CodeContent />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>  
    )
}

const DetailsCard = () => {
    return (
        <div className="cards">
            <Card />
        </div>
    )
}

const NoMatch = () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                No Match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default DetailsCard
