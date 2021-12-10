const express = require('express');
const path = require('path');
const {urlencoded} = require('body-parser')
const {engine} = require('express-handlebars');

const app = express();
const port = process.env.PORT || 8000
app.set('port',port)
app.engine('handlebars', engine({
    defaultLayout:'main',
    layoutsDir:path.join(__dirname,'views','layouts'),
    partialsDir:path.join(__dirname,'views','partials'),
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,"views"));

app.get('/', (req, res) => {
    res.render('jjvv');
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})



