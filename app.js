const exprees = require('express')

const app = exprees();


app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!!'
    });
});


module.exports = app;