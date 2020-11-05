import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import Create from './Create.js';
import ListPage from './ListPage.js';
import Nav from './Nav.js';

export default class Fetch extends Component {
    render() {
        return (
            <div className='fetch-div'>HOME PAGE
                <Router>
                    <Nav />
                    <Switch>
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <Create {...routerProps} />} 
                        />
                    </Switch>
                    <Switch>
                        <Route 
                            path="/listpage" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
