# Magical Commerce

  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

  ## Description
  This peoject serves as the backend of a modest ecommerce website.  It allows the user to create, update, and delete categories, products, and tags associated with those products.  The application saves the data persistently in a MySQL database.

  [Demonstration Video](https://watch.screencastify.com/v/flsYGbqL8ef0qX25mYWl)
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  The project requires Node.js and the node packages dotenv, express, sequelize, and mysql2.  To run the program on your local machine, you will need to include a .env file.  In this file, you will need to include DB_NAME, DB_USER, and DB_PW values.  From the command line and in the root directory, you should enter the mysql shell.  From here, run the command 'source db/schema.sql;'.  This will add a database named ecommerce_db, which is the default name of the database.  From here, you will either have to manually add category, product, tag, and product_tag tables to this database or run the command 'npm run seed' from the root of the project (outside the mysql shell).  If you do the latter route, your database will be seeded with default starting data.  Once this is done, and once all necessary packages are installed, the program should be ready to run.
  
  ## Usage
  
  After completing the installation instructions, from the command line and from the root of the project, input 'npm start' to start the server.  Once this is completed, you can then use Insomnia, Postman, or some other similar application to populate the database.  (Or, if you are even more ambitious, you can create a front end to populate the database that way.)
  
  ## License
  
  The content of this project is licensed under [The Unlicense](http://unlicense.org/).  Please click [here](http://unlicense.org/) for more information about how you may use code in this project.

  ## Contributing

  This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/).
  
  
  ## Tests
  
  There was no formal testing done for this project other than with Insomnia.  It should be noted that the product put route requires that a 'tagIds' property of type array be included to avoid generating a 400 error.  The put route will still make the appropriate changes if this is omitted, 400 error will be generated without this property included in the body of the request.
  
  ## Questions
  [GitHub Profile](http://github.com/cabralwilliams)
  
  For any questions concerning this application, please contact me at cabral.williams@gmail.com.