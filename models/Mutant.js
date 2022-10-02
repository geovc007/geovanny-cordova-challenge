const mongoose = require("mongoose");

const MutantsSchema = mongoose.Schema({
  dna: [
    {
      type: String,
      require: true,
      trim: true,
    },
  ],
  verify: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("Mutant", MutantsSchema);
