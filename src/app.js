import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import 'bulma'
import './stylesheets/main.scss'

import Home from './components/common/Home'
import ErrorPage from './components/common/Error'
import CocktailIndex from './components/cocktails/CocktailIndex'
import CocktailShow from './components/cocktails/CocktailShow'
import CocktailSpecial from './components/cocktails/CocktailSpecial'

const App = () => (
  <BrowserRouter>
    <main>
      {/* add an if statement - if user is on homepage remove class of ACTIVE from navbar */}
      <nav className="navbar">
        <Link className="navbar-item is-small" to="/">HOME</Link>
        <Link className="navbar-item is-small" to="/cocktails">ALL COCKTAILS</Link>
        <Link className="navbar-item is-small" to="/cocktails/special">SURPRISE</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cocktails/special" component={CocktailSpecial} />
        <Route path="/cocktails/:id" component={CocktailShow} />
        <Route path="/cocktails" component={CocktailIndex} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </main>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)