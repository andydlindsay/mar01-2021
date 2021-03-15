const express = require('express');
const app = express();
const port = 23149;

const morgan = require('morgan');

// middleware
// app.use((req, res, next) => {
//   // log the request
//   console.log(`incoming request to ${req.method} ${req.url}`);
//   // res.send('hello');
//   next();
// });

// const morganMiddleware = morgan('dev'); // (req, res, next) => {}
// app.use(morganMiddleware);

app.use(morgan('dev'));

// listeners/routes
// GET /users
app.get('/users', (request, response) => {
  response.send('these are the users from express');
});

app.get('/blogposts', (req, res) => {
  res.send('these blog posts are out of this world!');
});

app.post('/users', (req, res) => {});

// tell server to listen
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
