require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const productRouter = require('./routes/product-router');
const postRouter = require('./routes/post-router');
const connection = require('./db/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// set up route handlers
app.use('/products', productRouter);
app.use('/posts', postRouter(connection));
// app.use('/api/maps', mapRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
