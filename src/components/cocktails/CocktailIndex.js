import React from 'react'
import axios from 'axios'

import CocktailCard from './CocktailCard'

class CocktailIndex extends React.Component {
  state = {
    cocktails: [],
    showCocktails: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      this.setState({ cocktails: res.data.drinks, showCocktails: res.data.drinks })
    } catch (err) {
      console.log(err)
      this.props.history.push('/error')
    }
  }

  handleChange = e => {
    e.preventDefault()
    console.log(e.target.value)
    const alcoholSelected = e.target.value
    // console.log(alcoholSelected)
    const filterCocktails = this.state.cocktails.filter(cocktail => (cocktail.strAlcoholic === alcoholSelected || alcoholSelected === 'All'))
    this.setState({ showCocktails: filterCocktails })
  }

  render() {
    console.log(this.state.showCocktails)
    return (
      <div className="index-wrapper">
        <div className="title-wrapper">
          <h1 className="main-title">THE COCKTAIL CLUB</h1>
        </div>

        <div className="form-wrapper">
          <form className="alcoholic-form">
            <select onChange={this.handleChange} name="cocktails" id="cocktails">
              <option value="All">All</option>
              <option value="Alcoholic">Alcoholic</option>
              <option value="Optional alcohol">Optional Alcoholic</option>
              <option value="Non alcoholic">Non-Alcoholic</option>
            </select>
            {/* <input type="text" name='cocktail-search' id="cocktail-search" placeholder="Search cocktails..." value="" /> */}
          </form>
        </div>

        <section className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {this.state.showCocktails.map(cocktail => (
                <CocktailCard key={cocktail.idDrink} {...cocktail} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CocktailIndex