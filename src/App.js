// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import request from 'superagent';
//import Sort from './Sort';
import { Link } from 'react-router-dom';

export default class Fetch extends Component {

    state = {
        pokeData: [],
        pokemon: '',
        sortAlphabetical: '',
        sortType: 'id',
        loading: true
    }

    componentDidMount = async () => {
        this.fetchPokemon()
    }


    //https://agile-cove-58837.herokuapp.com/potions
    fetchPokemon = async () => {
        this.setState({
            loading: true
        });
        const response = await request.get(`https://agile-cove-58837.herokuapp.com/potions`);

        this.setState({ pokeData: response.body, loading: false})
    }

//Search Input and Button
    handleInput = async (e) => {
        this.setState({ pokemon: e.target.value });
    }

    handleButton = async (e) => {
        this.setState({ pokemon: e.target.value });
        e.preventDefault();
        const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}`);

        this.setState({ pokeData: response.body.results})
    }

//Drop Down Menus
    handleAlphabeticalChange = async (e) => {
        await this.setState({
            sortAlphabetical: e.target.value
        });
        this.fetchPokemon()
        console.log('ABC: ' + e.target.value);
      }
    
      handleTypeChange = async (e) => {
        await this.setState({
          sortType: e.target.value
        });
        this.fetchPokemon()
        console.log('Type: ' + e.target.value);
      }

//Pokemon Click to view Details
      handleClick = async (onePoke) => {
          this.props.history.push(`pokeData/${onePoke.pokemon}`);
      }

    render() {
        return (
            <div className='fetch-div'>
                <div className='search-and-sort-div'>
                    <div className='search-div'>
                        <input onChange={this.handleInput} />
                        <button onClick={this.handleButton}>Search by Name</button>
                    </div>
                    {/* <div className='sort-div'>
                        <Sort
                        handleAlphabeticalChange={this.handleAlphabeticalChange}
                        handleTypeChange={this.handleTypeChange}
                        />
                    </div> */}
                </div>
                <div className='fetched-pokemon-div'>
                    {
                    this.state.loading
                    ? <div><div>Loading</div></div>
                    : this.state.pokeData.map(onePoke =>
                        // <Link to={`/details/${onePoke.pokemon}`}>
                       <div key={onePoke.onePoke} onClick={(e) => this.handleClick(onePoke)} className='fetched-details-div'>
                            <p>
                                <p className='poke-name'>{onePoke.potion}</p>
                                {/* <img src={onePoke.url_image} alt={onePoke.pokemon} /> */}
                                <p><span className='underline'>Type:</span> {onePoke.spell_level}</p>
                                <p><span className='underline'>Attack: </span>{onePoke.tasty}</p>
                                <p><span className='underline'>Defense:</span> {onePoke.brand}</p>

                            </p>
                        </div>
                        // </Link>
                    )}
                </div>
            </div>
        )
    }
}
