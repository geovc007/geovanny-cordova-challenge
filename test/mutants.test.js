import { describe, expect, test } from "@jest/globals";
const mutantController = require("../controllers/mutantController");

describe("Mutants_Module", () => {
  const data = {
    dna: "['aerwer','berwerw','erwerc','werwerd']",
  };

  test("Should_Save_Mutants", () => {
    expect(mutantController.ingresarMutante(data).toBe("OK"));
  });
});
