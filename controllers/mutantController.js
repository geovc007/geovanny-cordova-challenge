const Mutant = require("../models/Mutant");
const { validationResult } = require("express-validator");
const mutantService = require("../Services/mutantsServices");

exports.ingresarMutante = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ errors: errors.array() });
    }
    let mutant;
    mutant = new Mutant(req.body);
    // Evalute Mutants Row
    const { dna } = mutant;
    const row = mutantService.verificarMutanteRow(dna);
    if (row === true) {
      mutant.verify = row;
      await mutant.save();
      res.send({ msg: "El Adn es Mutante" });
    } else {
      // Evaluate Mutants Col
      const col = mutantService.verificarMutanteCol(dna);
      if (col === true) {
        mutant.verify = col;
        await mutant.save();
        res.send({ msg: "El Adn es Mutante" });
      } else {
        mutant.verify = row;
        await mutant.save();
        res.status(403).send({ msg: "El Adn es Humano" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(403).send({ msg: "Hubo un Error al verificar Mutantes" });
  }
};

exports.statusMutante = async (req, res) => {
  try {
    const mutants = await Mutant.count({ verify: true });
    const humans = await Mutant.count({ verify: false });
    const ratio = Number((mutants / humans).toFixed(3));
    res.send({
      count_mutant_dna: mutants,
      count_human_dna: humans,
      ratio: ratio,
    });
  } catch (error) {
    console.log(error);
    res.status(403).send("Hubo un Error al obtener Mutantes");
  }
};

exports.getMutant = async (req, res) => {
  try {
    const mutants = await Mutant.find();
    res.json({ mutants });
  } catch (error) {
    console.log(error);
    res.status(403).send("Hubo un Error al obtener Mutantes");
  }
};
