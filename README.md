# Burger App

   [![Github](https://img.shields.io/badge/License-MIT-brightgreen)](#License)

   ## Description
   This application pulls burgers from a database and displays them onto the page. On the left side of the page are the uneaten burgers. Once you click the "devour" button next to the burger names, they will move to the right side of the page where it displays all of the burgers that have already been eaten. At the bottom of the page you can enter the name of an uneaten burger and it will display on the left side of the screen when submitted. All burgers are stored in the database, whether they have been eaten or not and will stay unless they are removed from the database.

   ## Table of Contents
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [License](#License)
   * [Tests](#Tests)
   * [Questions](#Questions)
   
   ## Installation
   To install, please run the following code in the terminal:

   ```
   npm install mysql
   npm install express
   npm install express-handlebars
   ```

   You will also need to have MySQL installed on your computer. This readme does not walkthrough the steps to do that, so you will have to look elsewhere online for that information. I am using MySQL Workbench for the database, but you may use the MySQL application of your choosing.

   ## Usage
   To use this app, copy the code from the schema.sql and the seed.sql files into MySQL Workbench(or MySQL application of your choosing) to create the database and tables.
   
   Once that is done, please run the following code in the terminal:

   ```
   node server.js
   ```

   ## License
   The license associated with this project is MIT.
   To view the license information, visit the link [here](https://github.com/CalebParris/Employee-Tracker/blob/master/LICENSE)

   ## Tests
   To test the app, follow the directions from the Installation and Usage sections first. After that, you can use the app as follows:

   ![Burger App](./public//assets/images/burger_app.gif)

   To see the deployed finished product, you can visit this link:
   
   [placeholder](placeholder)

   ## Questions
   If you have any comments, questions, or concerns about this project, please post them [here](https://github.com/CalebParris/Burger/issues) and I will respond as soon as I am able.

   Otherwise, you can contact me through the following means:
   * Email: calebparris@live.com
   * Github: [CalebParris](https://github.com/CalebParris)
    
