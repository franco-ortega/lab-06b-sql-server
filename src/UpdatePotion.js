import React, { Component } from 'react'
import {
    fetchAllBrands,
    fetchOnePotion,
    updatePotion
} from './Utils.js';

const userFromLocalStorage = {
    userId: 1
}

export default class UpdatePotion extends Component {
    state = {
        brands: [],
        brandId: 1,
        potionName: '',
        spellLevel: 0,
        tastyBoolean: true
    }

//fetch on mount
    componentDidMount = async () => {
        const brands = await fetchAllBrands();
        const potion = await fetchOnePotion(this.props.match.params.id);
        const brandNameAsString = potion.brand;

        const matchingBrand = brands.find((brand) => {
            return brand.name === brandNameAsString
        })

        this.setState({
            brands: brands,
            brandId: matchingBrand.id,
            potionName: potion.potion,
            spellLevel: potion.spell_level,
            tastyBoolean: potion.tasty

        });

    }


//submit form
    handleSubmit = async (e) => {
        e.preventDefault();

        await updatePotion(
            this.props.match.params.id,
            {
                brand_id: this.state.brandId,
                potion: this.state.potionName,
                spell_level: this.state.spellLevel,
                tasty: this.state.tastyBoolean,
                owner_id: userFromLocalStorage.userId
            }
        );

        this.props.history.push('/');
    }

//event handler for Brands drop down menu
    handleChange = (e) => {
        this.setState({ brandId: e.target.value });
    }

//event handler for Booleans drop down menu
handleChangeBoolean = (e) => {
    this.setState({ tastyBoolean: e.target.value });
}

    render() {

console.log(this.state.tastyBoolean);
console.log(this.state.brandId);
        return (
            <div>
                <h2>Update a Potion</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Potion:
                        <input
                        value={this.state.potionName}
                        onChange={e => this.setState({ potionName: e.target.value})} />
                    </label>
                    <label>
                        Spell Level:
                        <input
                        value={this.state.spellLevel}
                        onChange={e => this.setState({ spellLevel: e.target.value})}
                        />
                    </label>
                    <label>
                        Tasty
                        <select onChange={this.handleChangeBoolean}>
                            <option value='true'>True</option>
                            <option value='false'>False</option>
                        </select>
                    </label>
                    <label>
                        Brand
                        <select onChange={this.handleChange}>
                            {
                                this.state.brands.map(brand => <option
                                selected={this.state.brandId === brand.id}
                                key={brand.id}
                                value={brand.id}
                                >
                                    {brand.name}
                                </option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


                            /* {
                                this.state.brands.map(brand => <option
                                selected={this.state.tastyBoolean === brand.id}
                                key={brand.id}
                                value={brand.id}
                                >
                                    {brand.name}
                                </option>)
                            } */