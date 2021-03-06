import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About/About'
import Project from './Projects/Project'
import Work from './Work/Works'
import Header from './Header/Header'
import Contact from './Contact/Contact'
const AppLayout = () => {
    return (
        <Router>
            <div>
                <Header />
            </div>
            <Switch>
                <Route path="/" component={About} exact />
                <Route path="/projects" component={Project} exact />
                <Route path="/work" component={Work} exact />
                <Route path="/contact" component={Contact} exact />
            </Switch>
        </Router>
    )
}

export default AppLayout
