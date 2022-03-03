# Object-Relational Mapping (ORM): E-Commerce Back End [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A node.js backend api utilizing
[Express](https://www.npmjs.com/package/express), [Sequelize](https://www.npmjs.com/package/sequelize) and [MySQL2](https://www.npmjs.com/package/mysql2)
to provide paths to interact with a simple E-commerce SQL database. Developed as part of a bootcamp assignment for learning ORM. 

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

```md
npm install
```

## Usage

Before using this application you will need  to initialize and set up a connection to your own database. The database can be created using the schema file in db. A seeds file is also provided for testing.
Connecting the database can be done by modifying the .env.EXAMPLE file to match your local user settings. Make sure to take the .EXAMPLE off of the .env file before using.

<br>

Once Set up, just start with either

```md
npm start
```

or 

```md
node index.js
```

### Routes available

* Categories
    * View all Categories with its associated products
    * View Category by ID
    * Add a Category
    * Delete a Category
    * Update a Category

* Products
    * View Products
    * View Product by ID
    * Add a Product
    * Delete a Product
    * Update a Product

* Tags
    * View Tags
    * View Tag by ID
    * Add Tag
    * Delete Tag
    * Update Tag

<br>

### video example





## License

MIT

## Links

[My Github Account](https://github.com/mattyd96)

[Email: matthewdcodes@gmail.com](mailto:matthewdcodes@gmail.com)
