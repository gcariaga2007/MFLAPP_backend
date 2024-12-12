/////////////////////////////////////////////////////////////////

// fileName : server.js 
// Example using the http module
//const http from 'http');
//import { config } from 'dotenv';

import dotenv from "dotenv";
import mongodb from "mongodb";



dotenv.config();
console.log(process.env.DB_URI_LOCAL);
const uri = process.env.DB_URI_LOCAL;

const client = new mongodb.MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('mflapp');
//     const user = database.collection('user');
//         // Query for a movie that has the title 'Back to the Future'
//      const query = { email: 'email' };
//      const movie = await user.findOne(query);
//      console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }



import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';
const app = express();
app.use(express.json());

// Include route files
import usersRoute from './routes/routes.js';
// const productsRoute from './routes/products');


var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
  };


// Use routes
app.use('/', usersRoute);
// app.use('products', productsRoute);


// Specify the port to listen on
const port = 3000;




// Start the server
// app.listen(port, () => {
//     console.log("Node.js HTTP server is running on port " +  port);
// });

https.createServer(options, app).listen(3000); 
http.createServer(app).listen(2000); 