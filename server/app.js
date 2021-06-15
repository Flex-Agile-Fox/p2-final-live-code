require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.log(`app listen on port: http://localhost:${port}`)
);
