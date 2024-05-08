import request from "supertest";
import app from ".";

describe("GET /", () => {
  it("responds with JSON containing all articles", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(5);
    expect(res.body[0].bitcoin).toBeDefined();
  });
});

describe("GET /bitcoin", () => {
  it("responds with JSON containing Bitcoin articles", async () => {
    const res = await request(app).get("/bitcoin");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /ethereum", () => {
  it("responds with JSON containing Ethereum articles", async () => {
    const res = await request(app).get("/ethereum");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /cardano", () => {
  it("responds with JSON containing Cardano articles", async () => {
    const res = await request(app).get("/cardano");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /dogecoin", () => {
  it("responds with JSON containing Dogecoin articles", async () => {
    const res = await request(app).get("/dogecoin");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /nft", () => {
  it("responds with JSON containing NFT articles", async () => {
    const res = await request(app).get("/nft");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
