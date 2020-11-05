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
            
                {/* <div className='fetched-potions-div'>
                    {
                    this.state.loading
                    ? <div className='loading-div'><div>Loading</div> <img src='https://media.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.gif' alt='spinner' width='100' /> </div>
                    : this.state.potionData.map(onePotion =>
                       <div key={onePotion.onePotion} 
                        className='fetched-details-div'>
                            <p>
                                <p className='potion-name'>{onePotion.potion}</p>
                                <p><span className='underline'>Spell Level:</span> {onePotion.spell_level}</p>
                                <p><span className='underline'>Tasty: </span>{onePotion.tasty}</p>
                                <p><span className='underline'>Brand:</span> {onePotion.brand}</p>

                            </p>
                        </div>
                    )}
                </div> */}
                <div>
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
            </div>
        )
    }
}
