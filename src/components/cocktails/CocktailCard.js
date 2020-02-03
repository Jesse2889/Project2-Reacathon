import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({ idDrink, strDrink, strDrinkThumb, strIngredient1 }) => (
  <div key={idDrink} className="column is-one-fifth-desktop is-one-quarter-tablet is-third-mobile">
    <Link to={`/cocktails/${idDrink}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{strDrink}</h4>
        </div>
        <hr className="card-line"/>
        <div className="card-header">
          <h5 className="card-header-subtitle">{strIngredient1}</h5>
        </div>

        <div className="card-image">
          <figure className="image">
            <img src={strDrinkThumb} alt={strDrink} />
          </figure>
        </div>
      </div>
    </Link>
  </div>
)

export default CocktailCard