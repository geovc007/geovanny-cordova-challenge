const mutantServices = require("../Services/mutantsServices");
jest.useRealTimers();
jest.setTimeout(1000000);

test("Should Verify Mutant in ROW", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
  const response = mutantServices.verificarMutanteRow(dna);
  expect(response).toBe(true);
});

test("Should Verify Mutant in COL", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CTACTA", "TCACTG"];
  const response = mutantServices.verificarMutanteCol(dna);
  expect(response).toBe(true);
});

test("Should Verify Human", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CTACTA", "TCACTG"];
  const response = mutantServices.verificarMutanteRow(dna);
  expect(response).toBe(false);
});

test("Should Verify Mutant in  left->rigth top->bottom", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CTACAT", "TCACTA"];
  const response = mutantServices.verificarMutanteDiv(dna);
  expect(response).toBe(true);
});

test("Should Verify Mutant in  left->rigth bottom->top", async () => {
  const dna = ["ATGCGT", "CAGTTC", "TTGTGT", "AGTAGG", "CTACAT", "TCACTA"];
  const response = mutantServices.verificarMutanteDiv(dna);
  expect(response).toBe(true);
});
