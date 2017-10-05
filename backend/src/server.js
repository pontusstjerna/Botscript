const express = require('express');
const bodyParser = require('body-parser');

const botRouter = require('./routes/BotRouter');

const app = express();


const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Setup routes
app.use('/bots', botRouter);


app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});