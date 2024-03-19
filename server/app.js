import express  from 'express';
import dotenv from 'dotenv'
const app = express();



app.listen(process.env.LOCAL_PORT, ()=>{
    console.log("server run at port 8080");
})
