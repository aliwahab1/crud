const express = require('express');

const app = express();
const port = 5000;
const connectDb = require('./db/connect');
const cors = require('cors');


//Require dotenv
require('dotenv').config();

// req router
const router = require('./routes/crud');


// Middleware
// app.use((req, res, next) =>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Origin', '*');
    
//     if (req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Origin', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({})
//     }
//     next();
// })


app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}))


// Route
app.use('/api/crud', router)


// Connection
const start = async () => {
    try {
        await connectDb(process.env.MONGO_CONNECT);
        app.listen(port,(req,res) => {
            console.log('you are listening to port :', port);
    })
    } catch (error) {
        console.log(error)
    }
}

start();



// app.listen(port, (req, res) => {
//     console.log('you are listening to port: ', port);
// })

// app.get('/', (req, res) => {
//     res.status(200).send('All is working');
// })