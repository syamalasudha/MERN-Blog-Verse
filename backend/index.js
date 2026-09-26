const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require("dotenv").config();
const connectDB = require('./config/db');
connectDB()
const postRoutes= require('./routes/postRoutes');
app.use("/api/posts",postRoutes);
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('API is running.........!');
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

