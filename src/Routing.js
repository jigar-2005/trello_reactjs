import "./Trello.css";
import React from 'react'
import Homepage from './Homepage';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Routing() {
    return (
        <Router>
            <Route exact path="/">
                <Homepage />
            </Route>
        </Router>
    );
}
export default Routing;
