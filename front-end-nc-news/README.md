## FrontEnd Project by Tony Duchars

## Built on the NC News backEnd API

## FUNCTIONALITY

- PAGINATION with dynamic max page functionality fo when filtering.

- LOGIN and logout functionality. (currently learning and adding in token-based authentication to the back-end)

- FILTERING and Sort-by queries of data kept in database.

- VOTING on individual articles and comments only when logged into valid account.

- Thought given to responsive and consistent design throughout. (mobile and desktop )

## INSTRUCTIONS

To run this file locally you will need to run the command to install all dependencies:

```bash
npm i
```

## DEPENDENCIES

The package versions needed to locally run the app can be seen below:

```js
"dependencies": {
   "@reach/router": "^1.2.1",
    "animate.css": "^3.7.2",
    "axios": "^0.19.0",
    "react": "^16.11.0",
    "react-animated-css": "^1.2.1",
    "react-dom": "^16.11.0",
    "react-scripts": "3.2.0",
    "react-spinners-kit": "^1.9.0",
    "styled-components": "^4.4.1"
  }
```

(If you have any issues check you are running versions of these
dependencies which will support the functionality.)

## ** RECOMMENDED **

The site remembers articles you have read and re-styles the underline to cyan blue once visited an article from the homepage.

You have a pre-entered username to login or find other usernames under the articles if you wish.

## Link to Hosted Site

The link to the hosted version of the site can be found at here:

https://cosmos-news-project.netlify.com/topic/coding

and repository:

https://github.com/tduchars/cosmos-news-project

## Link to backEnd Repository

The link to the backEnd repository (of which this frontEnd queries) can be found at here:

https://github.com/tduchars/backEnd-News-API

(It's respective README can also be found locally here.)

## Link to Hosted backEnd API

The link to the hosted version of the backEnd API (of which this frontEnd queries) can be found here:

https://nc-tabloid.herokuapp.com/api

## WHAT I LEARNT FROM THE PROJECT

I learnt it is very important to structure the layout and concepts of where to hold state in the app formally and to a precise level. Due to me not giving this enough credit I had to compromise various nice functionality.

This is something I had not encountered before but will certainly give more credit to in the future.

Pagination I felt was also imprtant to include as it helps break up the 30+ articles otherwise bombarding you.
