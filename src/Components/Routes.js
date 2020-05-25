import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import ValidatedLoginForm from './ValidateLoginForm'
import Home from './Home';
import CarouselView from './CarouselView';
import history from './history';
import Cart from './Cart';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={ValidatedLoginForm} />
                    <Route path="/details" component={CarouselView} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </Router>
        )
    }
}