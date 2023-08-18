import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";


import db from "./database/db.js";
import Router from "./routes/route.js";


const app = express();
app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);
app.use('/uploads', express.static('uploads'));




const PORT = 8000;

app.listen(PORT, ()=>{console.log(`server is running on port no ${PORT}`)});

