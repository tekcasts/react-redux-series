import React, { Suspense } from "react";
import { Route, Switch, NavLink } from 'react-router-dom';

import VaccineFormPage from "./containers/VaccineForm";
import VaccineListPage from "./containers/VaccineList";
import VaccineThunkPage from "./containers/vaccineThunk";

import NotFoundPage from "./presentation/NotFound";

const VaccineSagaPage = React.lazy(() => import('./containers/VaccineSaga'));
const VaccineReSelectPage = React.lazy(() => import('./containers/VaccineReSelect'));


const App = () => {

    let routes =
        <Switch>
            <Route path="/" exact component={VaccineFormPage} />
            <Route path="/vaccinelist" component={VaccineListPage} />
            <Route path="/vaccinethunk" component={VaccineThunkPage} />
            <Route path="/vaccinesaga" component={VaccineSagaPage} />
            <Route path="/vaccinereselect" component={VaccineReSelectPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"> Tekcasts</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link"> Vaccine Form</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/vaccinelist" className="nav-link"> Vaccine List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/vaccinethunk" className="nav-link"> Thunk </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/vaccinesaga" className="nav-link"> Saga </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/vaccinereselect" className="nav-link"> ReSelect </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                {routes}
            </Suspense>

        </>
    );
};

export default App;





