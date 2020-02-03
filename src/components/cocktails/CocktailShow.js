import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class CocktailShow extends React.Component {
  state = {
    cocktail: {},
    ingredients: [],
    measurements: [],
    combined: []
  }

  async componentDidMount() {
    const cocktailId = this.props.match.params.id
    try {
      const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      this.setState({ cocktail: res.data.drinks[0] })
      this.setState({ combined: [res.data.drinks[0].strMeasure1, res.data.drinks[0].strIngredient1, res.data.drinks[0].strMeasure2, res.data.drinks[0].strIngredient2, res.data.drinks[0].strMeasure3, res.data.drinks[0].strIngredient3, res.data.drinks[0].strMeasure4, res.data.drinks[0].strIngredient4, res.data.drinks[0].strMeasure5, res.data.drinks[0].strIngredient5] })
    } catch (err) {
      this.props.history.push('/error')
    }
  }

  render() {
    const ingredients = this.state.ingredients.filter(ingredient => (ingredient !== null))
    const measurements = this.state.measurements.filter(measurement => (measurement !== null))
    console.log(measurements)
    console.log(ingredients)

    if (!this.state.cocktail.idDrink) return null // checks that just in case the cocktail data isn't back yet or if there were a problem not to render the jsx
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {this.state.cocktail &&
                <>
                  <div className="main-title-wrapper">
                    <h1 className="title cocktail-header">{this.state.cocktail.strDrink}</h1>
                  </div>
                  <div className="columns">
                    <div className="column is-half">
                      <figure className="image">
                        <img src={this.state.cocktail.strDrinkThumb} alt={this.state.cocktail.strDrink} />
                      </figure>
                    </div>
                    <div className="column is-half card-text">
                      <h4 className="title is-4">Ingredients</h4>
                      {this.state.combined.map((combine, index) => (
                        <p key={index}>{combine}</p>
                      ))}
                      <hr />
                      <h4 className="title is-4">Glass Selection</h4>
                      <p>{this.state.cocktail.strGlass}</p>
                      <hr />
                      <h4 className="title is-4">Instructions</h4>
                      <p>{this.state.cocktail.strInstructions}</p>
                      <hr />
                      <Link to={'/cocktails'}>
                        <button className="button is-white is-medium is-rounded">Back</button>
                      </Link>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default CocktailShow