const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 8000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

console.log('hello world');

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing

app.get("", (req, res) =>{
    res.render("index")
})
 
app.get("/about", (req, res) =>{
    res.render("about")
})

app.get("/weather", (req, res) =>{
    res.render("weather")
})

app.get("*", (req, res) =>{
    res.render("404error", {
        errorMsg: "opps Page Not Found !"
    })
})

app.listen(port, () => {
    console.log(`Listening to the port no ${port}`)
})