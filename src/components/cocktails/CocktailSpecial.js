import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CocktailSpecial extends React.Component {
  state = {
    cocktails: {},
    cocktailSpecial: []
  }

  async componentDidMount() {
    try {
      const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      this.setState({ cocktails: res.data.drinks })
    } catch (err) {
      this.props.history.push('/error')
    }
  }

  handleClick = () => {
    const randomCocktail = this.state.cocktails[(Math.floor(Math.random() * this.state.cocktails.length))]
    this.setState({ cocktailSpecial: randomCocktail })
  }

  render() {
    return (
      <>
        <section className="section">
          <h1 className="second-title">Enter your name to find your special cocktail...</h1>
        </section>

        <div className="form-wrapper">
          <div className="control">
            <input className="input is-danger" type="text" placeholder="You name..." />
            <button onClick={this.handleClick} className="button submit-button is-white is-small is-rounded">Submit</button>
          </div>
        </div>

        <Link to={`/cocktails/${this.state.cocktailSpecial.idDrink}`}>
          <div className="special-wrapper">
            <div className="card-special card">
              <div className="card-header">
                <h4 className="card-header-title">{this.state.cocktailSpecial.strDrink}</h4>
              </div>
              <div className="card-image">
                <figure className="image">
                  <img src={this.state.cocktailSpecial.strDrinkThumb} alt={this.state.cocktailSpecial.strDrink} />
                </figure>
              </div>
            </div>
          </div>
        </Link>
      </>
    )
  }
}

export default CocktailSpecial