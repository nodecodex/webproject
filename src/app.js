const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 8000;

const publicPath = path.join(__dirname,'../public');
const template_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname, "../templates/partials");
// use middleware

app.set('view engine', 'hbs');
app.set('views',template_path);

hbs.registerPartials(partials_path);
app.use(express.static(publicPath));

//  Routing
app.get("/", (req,resp)=>{

    resp.render('index');
});

app.get("/about", (req,resp)=>{

    resp.render("about");
});

app.get("/weather", (req,resp)=>{

    resp.render("weather");
});

app.get("*", (req,resp)=>{

    resp.render("404error",{
        errormsg: 'Opps! page Not found'
    });
});

app.listen(port,()=>{
console.log(`The Port Is Running And Port Path => ${port}`);
})
