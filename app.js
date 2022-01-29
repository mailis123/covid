const express = require("express");
const app = express();
const routes = require ("./router/api.js");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(routes);

app.listen(5000,()=>{
    console.log("application is running on port 5000");
});