import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

// Call dotenv.config() to load environment variables from .env file
dotenv.config();

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://rahulvikhe:${password}@dev-cluster.idtyynl.mongodb.net/?retryWrites=true&w=majority&appName=dev-cluster`; // cluster URL
const client = new MongoClient(connectionString);

// Async function to establish MongoDB connection
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connection to MongoDB Atlas successful");
    const db = client.db("integration_ninjas");
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error; // Rethrow the error for handling at a higher level
  }
}

// Export the database connection function
export default connectToDatabase();
