const express = require('express');
const app = express();
const webRoutes = require('./routes/web');
const pug = require('pug');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.use(cors());

app.use(express.static('client/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/src/views'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(webRoutes);

// this is our MongoDB database
const dbRoute = process.env.DB;
// connecting to mongo database
mongoose
  .connect(dbRoute, { useNewUrlParser: true })
  .then(() => console.log('Connected to Database'))
  .catch(error => console.log(error));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://www.localhost:${port}`);
});
