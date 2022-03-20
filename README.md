# NodeAPI

npm install --save express body-parser
npm install --save-dev nodemon
npm install --save dotenv

npm install --save-dev @babel/cli @babel/core @babel/node @babel/preset-env @babel/register

Check for below line in package.json in scripts 
"devStart": "nodemon --exec babel-node index.js"

npm install --save sequelize-cli sequelize pg pg-hstore

initialize sequelize
node_modules/.bin/sequelize init

sequelize command for generating models
example :- node_modules/.bin/sequelize model:create --name Account --attributes username:string,password:string,email:string

to run migration on the database OR  to create our database table.
node_modules/.bin/sequelize db:migrate


To run project - npm run devStart



For more help visit link:---
https://medium.com/@ocranbillions/create-a-restful-nodejs-api-with-express-postgres-and-sequelize-74ab9a77b7d5