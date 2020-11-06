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
import UpdatePotion from './UpdatePotion.js'

export default class Fetch extends Component {
    render() {
        return (
            <div className='home-div'>
                <h1>
                    Welcome to the Potion Home Page!!
                </h1>
                <Router>
                    <div className='home-nav-div'>
                        <Nav />
                    </div>
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
                    <Switch>
                        <Route 
                            path="/update/:id"
                            exact
                            render={(routerProps) => <UpdatePotion {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
