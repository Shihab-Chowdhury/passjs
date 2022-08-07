const express = require('express')

const app = express();

function middleware1(req, res, next) {
    req.custom = 100;
    next();    
}

function middleware2(req, res, next) {
    console.log(`Custom: ${req.custom}`);
    req.custom = 200
    next();    
}

function errorHandler(err, req, res, next) {
    res.json({ 
        err:err
    })    
}

app.use(middleware1)
app.use(middleware2)
app.use(errorHandler)

app.get('/', (req, res, next) =>{
    res.send(`no it is: ${req.custom}`)
})

app.listen(3000);