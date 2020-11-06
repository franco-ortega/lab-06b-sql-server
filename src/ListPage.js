import React, { Component } from 'react'
import './App.css';
import request from 'superagent';
//import Create from './Create.js';

export default class Fetch extends Component {

    state = {
        potions: [],
        loading: true
    }

    componentDidMount = async () => {
        const response = await request.get(`https://agile-cove-58837.herokuapp.com/potions`);

        this.setState({ potions: response.body, loading: false });
    }

    render() {
        console.log(this.state.potions);
        return (
            <div className='fetch-div'>POTIONS (LIST PAGE)
                <div className='fetched-potions-div'>
                    {
                        this.state.loading
                        ? <div className='loading-div'><div>Loading</div> <img src='https://media.giphy.com/media/MTKsRM3QzNeOI59SbO/giphy.gif' alt='spinner' width='100' /> </div>
                        : this.state.potions.map(onePotion =>
                        <div key={onePotion.onePotion} 
                            className='fetched-details-div'>
                                <p>
                                    <p className='potion-name'>{onePotion.potion}</p>
                                    <p><span className='underline'>Spell Level:</span> {onePotion.spell_level}</p>
                                    {/* <p><span className='underline'>Tasty: </span>{onePotion.tasty}</p> */}
                                    <p><span className='underline'>Brand:</span> {onePotion.brand}</p>
                                </p>
                            </div>) 
                    }
                </div>
            </div>
        )
    }
}




