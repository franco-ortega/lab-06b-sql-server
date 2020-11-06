import React, { Component } from 'react'
import request from 'superagent';

const userFromLocalStorage = {
    userId: 1
}

export default class Create extends Component {

    state = {
        brands: [],
        brandId: 1,
        loading: true,
        tastyBoolean: true
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
            owner_id: userFromLocalStorage.userId
        };
        

        await request
        .post('https://agile-cove-58837.herokuapp.com/potions')
        .send(newPotion);

        this.props.history.push('/listpage');
    }

    handleChange = (e) => {
        this.setState({ brandId: e.target.value });
    }

    handleChangeBoolean = (e) => {
        this.setState({ tastyBoolean: e.target.value });
    }
    
    render() {
        return (
            <div className='create-div'>
                <h2>
                    Create a potion.
                </h2>
                <form className='form-div' onSubmit={this.handleSubmit}>
                    <label>
                        Potion: <input onChange={e => this.setState({ potionName: e.target.value })}></input>
                    </label>
                    <label>
                        Spell Level: <input type='number' min='1' onChange={e => this.setState({ spellLevel: e.target.value })}></input>
                    </label>
                    <div>
                        Tasty: 
                        <select onChange={this.handleChangeBoolean}>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                    </div>
                    <div>
                        Brand: <select onChange={this.handleChange}>
                            {
                                this.state.brands.map(brand => <option key={brand.id} value={brand.id}>
                                {brand.name}
                                </option>)
                            }
                        </select>
                    </div>
                    <button
                    className='create-button'>
                        Create Potion
                    </button>
                </form>
            </div>
        )
    }
}

