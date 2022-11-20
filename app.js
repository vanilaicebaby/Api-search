const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
require('dotenv').config();

// app boot

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

// Middleware

const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const router = require('./routes/products');

//routes

app.use(express.json);
app.use(notFound);
app.use(errorHandler);
app.use('/api/v1/products', router)

// db connect

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server app listening on port ${port}!`));
  } catch (error) {
    console.log(error);
  }
};

start();
