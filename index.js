const express = require('express');
const app = express();
const router = require('./Routes/router');
const productsRouter = require("./Routes/productsRouter");
const connectDB = require('./Model/DB');
app.use(express.json());

const port = 5000;


app.use('/', router);
app.use('/product', productsRouter);


const start = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log("server started");
        });
    }
    catch (err) {
        console.log("DB not connected");

    }
}
start();



