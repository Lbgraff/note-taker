const express = require('express');
const { clog } = require('./middleware/clog');
const routes = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
