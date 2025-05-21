// Ensures jest runs on a random port to avoid conflicts
process.env.PORT = "0";

import request from "supertest";
import { app, server } from "../index";

describe("POST /api/total", () => {
  it("should return the correct sum when given a valid input", async () => {
    // TODO: Finish implementing this test
    // You can find documentation for the supertest library here: https://github.com/ladjs/supertest/tree/master
    // Hint: You can chain the .send({}) and .expect() functions onto the below

    const response = await request(app).post("/api/total");
  });

  // TODO: Think about other test cases you might need
});

afterAll(() => {
  server.close();
});
