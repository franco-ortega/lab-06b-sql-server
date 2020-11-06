import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-div'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create Potion</Link></li>
                    <li><Link to="/listpage">List Potions</Link></li>
                    <li><Link to="/update/1">Update Potion</Link></li>
                </ul>
            </div>
        )
    }
}