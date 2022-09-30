const express = require("express");
const router = express.Router();
const mutantController = require("../controllers/mutantController");
const { check } = require("express-validator");

router.post(
  "/",
  [check("dna", "El DNA es obligatorio").not().isEmpty()],
  mutantController.ingresarMutante
);

router.get("/stats", mutantController.statusMutante);

router.get("/", mutantController.getMutant);

module.exports = router;
