import {app} from "./app.js"
import  "dotenv/config"
import {configuredatabase} from "./config/database.js"
import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_API_KEY ,
    api_secret : process.env.CLOUD_API_SECRET,
})
configuredatabase()
app.listen(process.env.PORT,()=>{
 console.log("Server is runing on port " + process.env.PORT);
})