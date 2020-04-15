![ga-logo](src/assets/ga-logo.png)

# General Assembly Project 2: The Cocktail Club

## Aim:
To build a React application that consumes a public API.

## Timeframe
48 hours 

## Built together with:

[Abigail Foreman](https://github.com/abigailforeman1)

## Technologies used:
* React.js
* JavaScript
* Bulma
* Github
* Insomnia
* Webpack
* Node.js
* Express
* SCSS
* Babel
* Public Api: https://www.thecocktaildb.com

## Deployment

This app has been deployed on Heroku and can be found here: https://the-cocktail-club.herokuapp.com/

## Getting started

Use the clone button to download the source code. From the root directory type 'npm run serve' in the terminal then navigate to localhost:4000 in your browser.

## Brief

For this project we had to build a React application that consumed a public API, which incorporated at least one classical/functional component, including a router with several "pages", included wireframes that we designed before building, have semantically clean HTML and be deployed online and accessible to the public.

This was my second project on General Assembly’s SEI course and also my first project building with React and APIs.

![Cocktail Club homepage](src/assets/cocktail-club-homepage.png)

## Website architecture

Welcome to The Cocktail Club - your one-stop shop for cocktail inspiration and recipes! This website is made up of a homepage, a cocktail index page with search functionality, a cocktail show page, a cocktail surprise page and navbar with links. The public API used is a database of cocktails displaying information about ingredients, measurements, types of glass, alcohol content and an image. We picked this API as it offered a test API key to access the database if you are using it as a tool to learn.

To begin this project we set up an Insomnia workspace to help understand the data and begin dealing with initial data requests from the database. We then started drawing out the wireframes and sitemap on paper so we both agreed on the sites functionality and downloaded a number of Node.js packages. 

When you navigate to the website homepage you will be prompted to click the 'enter' button to begin your journey.

1. Cocktail index page

This classical React component displays all the cocktails retrieved from the database with the axios get request. Each cocktail is displayed by mapping through the data and creating a Bulma card, which is refactored into a functional React component to keep the code clean. The user can see a name, image and main spirit used in each cocktail to help them find what they are looking for and they can also search for alcoholic/non-alcoholic/optional alcoholic drinks with the drop down search form. From here, users can click on their chosen cocktail and they will be linked to that cocktail's show page.

Here is an example of code from the index page:

```javascript
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
    const alcoholSelected = e.target.value
    const filterCocktails = this.state.cocktails.filter(cocktail => (cocktail.strAlcoholic === alcoholSelected || alcoholSelected === 'All'))
    this.setState({ showCocktails: filterCocktails })
  }
```

![screenshot of The Cocktail Club index page](src/assets/cocktail-club-index-page.png)

2. Cocktail show page

The show page is a classical React component that uses a get request to the API for data about the cocktails name, image, ingredients, measurements, glass selection and recipe instructions. The user can click the 'back' button to return to the index page.

3. Cocktail surprise page

This classical React component allows users to enter their name and click 'submit' to display a randomly selected cocktail from the website. The user can then click the cocktail and they are taken to the cocktail show page.

Here is an example of the code for this functionality:

```javascript
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
```

![screenshot of The Cocktail Club surprise page](src/assets/cocktail-surprise-page.png)

## Challenges and future improvements:

1. The first challenge we faced was accessing the data from the API. This was our first time working with a public REST API so it took a bit of time to figure out. The cocktail data was stored as objects within an outer object, within an array - once we figured this out we were away.

2. There is more functionality we would like to add on the index page. We would like to enhance the search form to include more functionality so that users can type the name of their favourite cocktail (this would use regex) and search based on different spirits. We would also like to incorporate a second API as the cocktail database was slightly limited with what information it gave us. We could add an API that finds bars and pubs in your local area to go and enjoy your cocktail special!