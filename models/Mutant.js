const mongoose = require("mongoose");

const MutantsSchema = mongoose.Schema({
  dna: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = mongoose.model("Mutant", MutantsSchema);
