import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import './App.css';
import request from 'superagent';
import Create from './Create.js';

export default class Fetch extends Component {

    state = {
        potionData: [],
        loading: true
    }

    componentDidMount = async () => {
        this.fetchPotion()
    }

    //https://agile-cove-58837.herokuapp.com/potions
    fetchPotion = async () => {
        this.setState({
            loading: true
        });
        const response = await request.get(`https://agile-cove-58837.herokuapp.com/potions`);

        this.setState({ potionData: response.body, loading: false})
    }

    render() {
        return (
            <div className='fetch-div'>POTIONS
            <Create />
                <div className='fetched-potions-div'>
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
                </div>
                <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <Create {...routerProps} />} 
                        />

                    </Switch>
                </Router>
            </div>
            </div>
        )
    }
}
