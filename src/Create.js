import React, { Component } from 'react'
import request from 'superagent';

const userFromLocalStorage = {
    userID: 1
}

export default class Create extends Component {

    state = {
        potionData: [],
        loading: true
    }

    componentDidMount = async () => {
        const response = await request.get(`https://agile-cove-58837.herokuapp.com/brands`);

        this.setState({ brands: response.body});
    }


    // componentDidMount = async () => {
    //     this.fetchPotion()
    // }

    // //https://agile-cove-58837.herokuapp.com/potions
    // fetchPotion = async () => {
    //     this.setState({
    //         loading: true
    //     });
    //     const response = await request.get(`https://agile-cove-58837.herokuapp.com/potions`);

    //     this.setState({ potionData: response.body, loading: false})
    // }


    handleSubmit = async (e) => {
        e.preventDefault();

        const newPotion = {
            brand_id: this.state.brandId,
            spell_level: this.state.spellLevel,
            owner_id: this.state.userFromLocalStorage
        };

        await request
        .post('https://agile-cove-58837.herokuapp.com/potions')
        .send(newPotion);

        this.props.history.push('/');
    }

    render() {
        return (
            <div className='create-div'>
                Create a potion.
                <form className='form-div' onSumbit={this.handleSubmit}>
                    <label>Potion: <input></input></label>
                    <label>Spell Level: <input></input></label>
                    <div>
                        Brand: <select onChange={this.handleChange}>
                            {
                                this.state.brands.map(brand => <option key={brand.id} value={brand.id} />
                            }
                            <option value="Arkex Brews">Arkex Brews</option>
                            <option value="Davan's Draughts">Davan's Draughts</option>
                            <option value="Ismelda's Elixir's">Brand</option>
                            <option value="Wild Tonics">Wild Tonics</option>
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
