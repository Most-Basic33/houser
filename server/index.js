require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    port = SERVER_PORT,
    app = express()

    app.use(express.json())

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24}//one day
    }))

    massive({
        connectionString: CONNECTION_STRING, 
        ssl: {rejectUnauthorized: false}
    }).then(db =>{
        app.set('db', db)
        console.log('Say what.....database!!')
    })
    
app.get(`/api/house/`)

    app.listen(port, ()=>console.log(`House Searching on ${port} da smooth`))