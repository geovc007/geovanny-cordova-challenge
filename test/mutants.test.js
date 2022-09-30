const request = require("supertest");
const app = require("../index");
const db = require("./db");

const agent = request.agent(app);

beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
afterAll(async () => await db.close());

describe("POST /api/mutant", () => {
  test("Should Verify Mutant OK", async () => {
    const response = await agent.post("/api/mutant").send({
      dna: "['aerwer','berwerw','erwerc','werwerd']",
    });
    expect(response.statusCode).toEqual(200);
  });
});
