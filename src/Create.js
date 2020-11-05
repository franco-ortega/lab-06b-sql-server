import React, { Component } from 'react'
import request from 'superagent';

export default class Create extends Component {

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
            <div>
                CREATE PAGE
                <form>
                    <select>
                        <option value='potion'>Potion</option>
                        <option value='spellLevel'>Spell Level</option>
                        <option value='brandId'>Brand</option>
                    </select>
                    <button>
                        Create Potion
                    </button>
                </form>
            </div>
        )
    }
}
