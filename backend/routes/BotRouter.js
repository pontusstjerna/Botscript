const express = require('express');

const botRouter = express.Router();

// Get all bots
botRouter.get('/', (req, res) => {
  res.json([
    {
      name: 'Johans Bot',
      wins: 0,
      losses: 434344
    }, {
      name: 'Someone elses bot',
      wins: 434344,
      losses: 0
    }
  ]);
});

// Get bot with specified id
botRouter.get('/:id', (req, res) => {
  res.json({
    name: 'Johans bot',
    wins: 0,
    losses: 43542432
  })
});


module.exports = botRouter;