# FootballTeams

This project displays the Premier League football teams and their details

## Components

Home Component: 

* Displays each club's Name, logo and stadium name in card.
* Makes an api request in order to get all Premier League team details. ('/getAllTeams').
* Filters Clubs by name and stadium capacity using a FormGroup.
* Cards also have a details action button in order to open the DetailsDialogComponent.

Details Dialog Component: 

* This is an angular material Dialog Component.
* Displays the club's basic info and stadium info.

App Component: 

* Has an angular material toolbar with the Darkmode/lightmode toggle icon-button and the router-outlet.
## Services

Global Service: 

* doAction function can do any possible api request for each Http Method (GET, POST, DELETE, PATCH... etc).
* Has get/set for localStorage and sessionStorage items.

## Serve

1. Run `npm install` to install node_modules
2. Run `ng serve` to start the project in localhost:4200

## API

I also created a small api in order to make requests at https://www.thesportsdb.com/api.php. You need to download the FootballTeamsApi and:
1. Run `npm install` to install node_modules
2. Run `npm run start` to start the project in localhost:8081
