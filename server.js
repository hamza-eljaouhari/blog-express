
//API GENERATED WITH LOVE BY https://github.com/skiod
//v 0.0.1
const express = require('express');

const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use('/',require('./routes/web'))
app.use('/',require('./routes/user')) 
app.use('/',require('./routes/article')) 
app.use('/',require('./routes/comment')) 

app.listen(process.env.PORT,() => {
    console.log(` LISTEN TO PORT ${process.env.PORT}`)
})