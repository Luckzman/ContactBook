# ContactBook
[![CircleCI](https://circleci.com/gh/Luckzman/ContactBook/tree/master.svg?style=svg)](https://circleci.com/gh/Luckzman/ContactBook/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/0e667e3b1aad9a6fd602/maintainability)](https://codeclimate.com/github/Luckzman/ContactBook/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0e667e3b1aad9a6fd602/test_coverage)](https://codeclimate.com/github/Luckzman/ContactBook/test_coverage)
ContactBook is an app that stores and keep track of contacts


## Table of Content

1. [Built With](#built-with)
2. [Application Features](#application-features)
3. [How to use](#how-to-use)
4. [Author](#author)
5. [License](#license)

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Scss](https://sass-lang.com/)
- [Jest](https://expressjs.com/) & [Enzyme](https://airbnb.io/enzyme/)
- [Cypress](https://www.cypress.io/)
- [CircleCI](https://circleci.com/)

### Deployment

Ride-My-Way UI is hosted on gh-pages while the app is hosted on Heroku

- [Netlify app](https://fastfoodfast2018.herokuapp.com/api/v1/order/)

## Application Features

1. User can create new contact
2. User should be able to favorite a contact
3. User should be able to edit a contact
4. User should be able to toggle favorite contact
5. User should be able to view all contacts
6. User should be able to view favorite contacts

## How to use

### Prerequisite

To clone and run this application, you'll need [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/)(which comes with [npm](https://www.npmjs.com/)) installed on you computer.

### Installing

From your command line

```
# Clone this repository
$ git clone https://github.com/Luckzman/ContactBook.git

# Go into the repository directory
$ cd Contactbook

# Install dependencies
$ npm install or $ yarn install

# run the app
$ npm start or $ yarn start
```

### Running Test
- Navigate to the project root directory
- After installation, run `npm test`

### Running End-To-End Test

- Navigate to the project root directory
- After installation, run `npm start` to start the local server
- Then run `npm run ci:cypress-run` on a separate terminal window

## Author

Lucky Omokarho Oniovosa

## License

MIT

