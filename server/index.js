const express = require('express');
const app = express();
const path = require('path');

app.set("views",path.resolve(__dirname,'../src/frontend/components'));
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(path.resolve(__dirname,'../public')));


app.get("/app",(req, res)=>{
    console.log("app");
    res.render("App");
})

app.get("/greetings",(req, res)=>{
    console.log("greetings");
    res.render("Greetings");
})

app.listen(3000);
