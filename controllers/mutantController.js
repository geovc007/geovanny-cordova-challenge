const Mutant = require("../models/Mutant");
const { validationResult } = require("express-validator");

exports.ingresarMutante = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ errors: errors.array() });
    }
    let mutant;
    mutant = new Mutant(req.body);
    await mutant.save();
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status(403).send("Hubo un Error al verificar Mutantes");
  }
};
