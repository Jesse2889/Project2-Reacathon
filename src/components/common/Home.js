import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container has-text-centered">

        <div className="title-wrapper">
          <h1 className="main-title">THE COCKTAIL CLUB</h1>
        </div>

        <Link to={'/cocktails'}>
          <button className="button is-white is-medium is-rounded">Enter</button>
        </Link>

      </div>
    </div>
  </section>
)

export default Home