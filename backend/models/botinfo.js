const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BotInfoSchema = new Schema({
  name: String,
  wins: Number,
  losses: Number
});
