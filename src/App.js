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
// import {
//     BrowserRouter as Router, 
//     Route, 
//     Switch,
// } from 'react-router-dom';

import request from 'superagent';
//import Sort from './Sort';
//import { Link } from 'react-router-dom';

export default class Fetch extends Component {

    state = {
        potionData: [],
        //pokemon: '',
        // sortAlphabetical: '',
        // sortType: 'id',
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

//Search Input and Button
    // handleInput = async (e) => {
    //     this.setState({ pokemon: e.target.value });
    // }

    // handleButton = async (e) => {
    //     this.setState({ pokemon: e.target.value });
    //     e.preventDefault();
    //     const response = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}`);

    //     this.setState({ potionData: response.body.results})
    // }

//Drop Down Menus
    // handleAlphabeticalChange = async (e) => {
    //     await this.setState({
    //         sortAlphabetical: e.target.value
    //     });
    //     this.fetchPotion()
    //     console.log('ABC: ' + e.target.value);
    //   }
    
    //   handleTypeChange = async (e) => {
    //     await this.setState({
    //       sortType: e.target.value
    //     });
    //     this.fetchPotion()
    //     console.log('Type: ' + e.target.value);
    //   }

//Pokemon Click to view Details
      // handleClick = async (onePotion) => {
      //     this.props.history.push(`potionData/${onePotion.pokemon}`);
      // }

    render() {
        return (
            <div className='fetch-div'>
                {/* <div className='search-and-sort-div'>
                    <div className='search-div'>
                        <input onChange={this.handleInput} />
                        <button onClick={this.handleButton}>Search by Name</button>
                    </div>
                    <div className='sort-div'>
                        <Sort
                        handleAlphabeticalChange={this.handleAlphabeticalChange}
                        handleTypeChange={this.handleTypeChange}
                        />
                    </div>
                </div> */}
                <div className='fetched-potions-div'>
                    {
                    this.state.loading
                    ? <div><div>Loading</div></div>
                    : this.state.potionData.map(onePotion =>
                        // <Link to={`/details/${onePotion.pokemon}`}>
                       <div key={onePotion.onePotion} onClick={(e) => this.handleClick(onePotion)} className='fetched-details-div'>
                            <p>
                                <p className='potion-name'>{onePotion.potion}</p>
                                {/* <img src={onePotion.url_image} alt={onePotion.pokemon} /> */}
                                <p><span className='underline'>Type:</span> {onePotion.spell_level}</p>
                                <p><span className='underline'>Attack: </span>{onePotion.tasty}</p>
                                <p><span className='underline'>Defense:</span> {onePotion.brand}</p>

                            </p>
                        </div>
                        // </Link>
                    )}
                </div>
            </div>
        )
    }
}
