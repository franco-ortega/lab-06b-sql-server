import React, { Component } from 'react'
import request from 'superagent';

const userFromLocalStorage = {
    userId: 1
}

export default class Create extends Component {

    state = {
        brands: [],
        loading: true
    }

    componentDidMount = async () => {
        const response = await request.get(`https://agile-cove-58837.herokuapp.com/brands`);

        this.setState({ brands: response.body});
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const newPotion = {
            potion: this.state.potionName,
            spell_level: this.state.spellLevel,
            tasty: this.state.tastyBoolean,
            brand_id: this.state.brandId,
            owner_id: this.state.userFromLocalStorage.userId
        };

        await request
        .post('https://agile-cove-58837.herokuapp.com/potions')
        .send(newPotion);

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ brandId: e.target.value });
    }

    handleChangeTwo = (e) => {
        this.setState({ tastyBoolean: e.target.value });
    }

    render() {
        console.log(this.state.brands);
        console.log(this.state.potionName);
        console.log(this.state.spellLevel);
        console.log(this.state.tastyBoolean);
        console.log(this.state.brandId);
        //console.log(this.state.userFromLocalStorage.userId);
        return (
            <div className='create-div'>
                Create a potion.
                <form className='form-div' onSumbit={this.handleSubmit}>
                    <label>
                        Potion: <input onChange={e => this.setState({ potionName: e.target.value })}></input>
                    </label>
                    <label>
                        Spell Level: <input onChange={e => this.setState({ spellLevel: e.target.value })}></input>
                    </label>
                    <div>
                    
                        {/* Tasty: <input onChange={e => this.setState({ tastyBoolean: e.target.value })}></input> */}
                        Tasty: <select onChange={this.handleChangeTwo}>
                            <option value="">True or False</option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                    
                    </div>
                    <div>
                        Brand: <select onChange={this.handleChange}>
                            <option value=''>Pick Brand</option>
                            {
                                this.state.brands.map(brand => <option key={brand.id} value={brand.id}>
                                {brand.name}
                                </option>)
                            }
                            {/* <option value="Arkex Brews">Arkex Brews</option>
                            <option value="Davan's Draughts">Davan's Draughts</option>
                            <option value="Ismelda's Elixir's">Brand</option>
                            <option value="Wild Tonics">Wild Tonics</option> */}
                        </select>
                    </div>
                    <button>
                        Create Potion
                    </button>
                </form>
            </div>
        )
    }
}

