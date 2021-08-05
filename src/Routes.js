import React from 'react'
import {BrowserRouter as Switch, Route} from "react-router-dom";
import About from './Component/About/About';
import Project from './Component/Projects/Project';
import Works from './Component/Work/Works'

const Routes = () => {
    return (
            <Switch>
                <Route path="/projects" component={Project} exact />
                <Route path="/work" component={Works} exact />
                <Route path="/profile" component={About} exact />
            </Switch>
    )
}

export default Routes
