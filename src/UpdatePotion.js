import React, { Component } from 'react'
import {
    fetchAllBrands,
    fetchOnePotion,
    updatePotion,
    deletePotion
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
//console.log(potion);
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

        this.props.history.push('/listpage');
//        window.location.href = '/listpage';
    }

//event handler for Brands drop down menu
    handleChange = (e) => {
        this.setState({ brandId: e.target.value });
    }

//event handler for Booleans drop down menu
handleChangeBoolean = (e) => {
    this.setState({ tastyBoolean: e.target.value });
}

//event handler for Delete button
handleClickDelete = async (e) => {
    await deletePotion(this.props.match.params.id);

    this.props.history.push('/listpage');
}

    render() {
console.log(this.props.match.params.id)
console.log(this.state.tastyBoolean, typeof this.state.tastyBoolean);
        return (
            <div className='update-potion-div'>
                <form onSubmit={this.handleSubmit} className='update-form-div'>
                    <h2>Update a Potion</h2>
                    <label>
                        Potion:
                        <input
                        value={this.state.potionName}
                        onChange={e => this.setState({ potionName: e.target.value})} />
                    </label>
                    <label>
                        Spell Level:
                        <input
                        type='number'
                        min='1'
                        value={this.state.spellLevel}
                        onChange={e => this.setState({ spellLevel: e.target.value})}
                        />
                    </label>
                    <label>
                        Tasty
                        <select onChange={this.handleChangeBoolean}
                        >
                            <option selected={!this.state.tastyBoolean} value={true}>True</option>
                            <option selected={!this.state.tastyBoolean} value={false}>False</option>
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
                    <button
                    className='update-button'>
                        Submit Update
                    </button>
                </form>
                <div className='delete-div'>
                    <button
                    className='delete-button'
                    onClick={this.handleClickDelete}>
                        Delete Potion
                    </button>

                </div>
            </div>
        )
    }
}


