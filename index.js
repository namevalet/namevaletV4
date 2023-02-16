const express = require('express');
const path = require("path");
const app = express();
const config = require("./config/config");

app.use(express.static(path.join(__dirname + "static")));

app.set("view engine", "ejs");

//test
/* app.get("/", function ( req,res){
    //res.render("index.ejs",{title: "test of ejs templating engines"});
    //const test
    
})
 */
// migrating pages to ejs
app.get("/", function ( req,res){
    res.render("shop-list-ls.ejs");
    //const test
    
})

app.listen(config.PORT, function(err) {
    if(err){
        return console.log(" Error.")
    }
  console.log("the server is running on port " + config.PORT);
});