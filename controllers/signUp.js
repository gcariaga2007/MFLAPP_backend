
import dotenv from "dotenv";
import mongodb from "mongodb";



dotenv.config();
console.log(process.env.DB_URI_LOCAL);
const uri = process.env.DB_URI_LOCAL;

const client = new mongodb.MongoClient(uri);

export const  signUpController = async (newUser, res) => {
  
    try {
      
      const database = client.db('mflapp'); 
      const user = database.collection('user');
      await user.insertOne(newUser.body);
    } finally {
      // Ensures that the client will close when you finish/error
     
     //client.close(); //<- killed this because clsing client made my code mad (mongo no conect)
     res.send("this")
    }
  }

export default signUpController