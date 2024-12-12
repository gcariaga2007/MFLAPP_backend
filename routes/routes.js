// routes/users.js
import express from 'express';
  const router = express.Router();
import dotenv from "dotenv";
import mongodb from "mongodb";
import signUpController from '../controllers/signUp.js';
dotenv.config();
const uri = process.env.DB_URI_LOCAL;
const client = new mongodb.MongoClient(uri);




// Define a route
router.get('/', (req, res) => {
    res.send('this is user route');// this gets executed when user visit http://localhost:3000/user
});

router.get('/101', (req, res) => {
    res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/102', (req, res) => {
    res.send('this is user 102 route');// this gets executed when user visit http://localhost:3000/user/102
});

router.post('/login',signUpController);

// export the router module so that server.js file can use it
//module.exports = router;
export default router