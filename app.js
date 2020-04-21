const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {PORT = 3000} = process.env;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log(`App listening ${PORT}`);
})