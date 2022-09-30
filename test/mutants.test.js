const request = require("supertest");
const app = require("../index");
const db = require("./db");

const agent = request.agent(app);

beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

// test("POST /api/mutant, Should_Reclute_Mutant", (done) => {
//   agent
//     .post("/api/mutant")
//     .send({
//       dna: "['aerwer','berwerw','erwerc','werwerd']",
//     })
//     .expect(200)
//     .then((res) => {
//       done();
//     });
// });

describe("POST /api/mutant", () => {
  test("Should Verify Mutant OK", async () => {
    const response = await agent.post("/api/mutant").send({
      dna: "['aerwer','berwerw','erwerc','werwerd']",
    });
    expect(response.statusCode).toEqual(200);
  });
});
