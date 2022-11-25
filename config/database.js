import mongoose from "mongoose";
import "dotenv/config";

export function configuredatabase(){
    mongoose.connect(process.env.MONGO_URL);
    const dbConnection = mongoose.connection;
    dbConnection.on("error",()=>{
        console.log("Error in db connection");
    });
    dbConnection.once("connected",()=>{
        console.log("Db Connected");
    })
}
