const mutantServices = require("../Services/mutantsServices");
jest.useRealTimers();
jest.setTimeout(1000000);

test("Should Verify Mutant OK", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
  const response = mutantServices.verificarMutanteRow(dna);
  expect(response).toBe(true);
});

test("Should Verify Human", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CTACTA", "TCACTG"];
  const response = mutantServices.verificarMutanteRow(dna);
  expect(response).toBe(false);
});

test("Should ReverseADN", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CTACTA", "TCACTG"];
  const response = mutantServices.verificarMutanteCol(dna);
  expect(response).toBe(true);
});
