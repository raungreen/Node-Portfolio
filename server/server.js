const express = require('express');
const app = express();
const webRoutes = require('./routes/web');
const pug = require('pug');
const path = require('path');

const port = 3000;

app.use(express.static('client/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/src/views'));

app.use(webRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://www.localhost:${port}`);
});
