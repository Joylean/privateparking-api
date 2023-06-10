const pool = require('./connection.js');
const express = require('express');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API connected')
})

app.use('/api',routes);

app.listen(3300,()=>{
    console.log("Server is now listening at port 3300");
})

pool.connect();