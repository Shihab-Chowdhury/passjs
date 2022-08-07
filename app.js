const express = require('express')

const app = express();

function middleware1(req, res, next) {
    console.log('I am a middleware1');
    next();    
}

function middleware2(req, res, next) {
    console.log('I am a middleware2');
    const errObj = "<h1>I am an error</h1>"

    next(errObj);    
}

function errorHandler(err, req, res, next) {
    if (err) {
        res.send('<h1>There was an error, please try again</h1>')
    }
    
}

app.use(middleware1)
app.use(middleware2)
app.use(errorHandler)

app.get('/', (req, res, next) =>{
    res.send('<h1>Hello World</h1>')
})

app.listen(3000);