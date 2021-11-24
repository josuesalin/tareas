import { connect } from "mongoose";
import {MONGODB_URI}from './config'


(async()=>{
    //console.log("works")
     try {
        const db =await connect(MONGODB_URI)
        console.log("db conented to",db.connection.name)
     } catch (error) {
         console.error(error)
     }
})();
// const db =await connect("mongodb://localhost/crud-mongo")
// console.log("db conented to",db.connection.name)
