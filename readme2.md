Building a single page React application to consume a cocktail JSON API ..... and we have two days to do it ....

The Cocktail Data Base URL: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

REST

Collection URL - /cocktails
GET - return a list of all the cocktails - (Index page)

Member URL - /cocktails/:id
GET - returns once specific cocktail based on it's id - (Show page)

FRONT END PAGES 

DAY 1:
- Home page - url="/" - just the front page of our site
- Cocktail Index page - url="/cocktails" - display all the cocktails available, backend-request-url="GET /cocktails"
- Cocktail Show page - url="/cocktails/:id" - display a single cocktail, linked from the index page, backend-request-url="GET /cocktails/:id" 
- Search feature - won't be it's own page but will filter through cocktails based on a few search criterias and display on the index page --- use cw/hw we did before where we filtered down (maybe donut classwork)

DAY 2:
- style all pages 
- add cocktail of the day features - loop through all cocktails and generate a random one - display on index page?

- Other stuff
  - A nice navbar 
  - handle our errors better - forms
  - 404 page if we get a bad cheeses
  - notification 
