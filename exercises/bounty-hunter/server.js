const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const BountySchema = new Schema ({
  firstName: String,
  lastName: String,
  living: Boolean,
  bounty_amount: Number,
  type: String
})

module.exports = mongoose.model(Bounty, BountySchema);
