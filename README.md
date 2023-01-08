![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project 

Welcome to my first full-stack project! This app was built using React, Redux, Node, and Sequelize. The goals of this project were to consolidate and apply concepts learned in the bootcamp Henry, learn best practices, and practice my Git workflow.

## Technologies Used
- HTML
- CSS
- JavaScript
- React
- Redux
- Node
- Sequelize
- Postgres

## Features

### Home page
- Search for countries by name
- Cards showing the names, continents, and flags of each country
- Buttons to filter by continent and by type of tourist activity
- Buttons to sort countries alphabetically and by population in ascending or descending order
- Pagination to search for more countries

### Country details page
- Fields shown on the home page for each country (flag image, name, 3-letter country code, and continent)
- 3-letter country code (ID)
- Capital
- Subregion
- Area (shown in km2 or millions of km2)
- Population
- Tourist activities with all associated information

### Create activity page
- JavaScript controlled form with the following fields:
  - Name
  - Difficulty
  - Duration
  - Season
- Ability to select/add multiple countries at once
- Button/option to create a new tourist activity

### Extras
- Loader while countries are loading
- 404 error page for invalid routes
- Fully Responsive 

## Screenshots

![Screenshot of country details page](/screenshots/Landing.png)
![Screenshot of home page](/screenshots/home.png)
![Screenshot of country details page](/screenshots/detail.png)
![Screenshot of country details page](/screenshots/Creation.png)
![Screenshot of country details page](/screenshots/Loader.png)
![Screenshot of country details page](/screenshots/error404.png)

## Running the Project

In the API directory, create a file called .env with the following format:

DB_USER=yourPostgresUsername
DB_PASSWORD=yourPostgresPassword
DB_HOST=localhost

Replace yourPostgresUsername and yourPostgresPassword with your own credentials to connect to Postgres. This file will be ignored when uploading to GitHub, as it contains sensitive information (your credentials).

Additionally, you will need to create a database called "countries" from psql. These steps are necessary if you want to test the project.