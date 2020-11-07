const supertest = require("supertest");
const app = require("../app");


test("POST /login", async () => {
    const data = {
        username: "root",
        password: "pw123"
    };
    await supertest(app)
        .post("/postRoute/login")
        .send(data)
        .expect(200)


    const badData = {
        username: null,
        password: "pw123"
    };
    await supertest(app)
        .post("/postRoute/login")
        .send(badData)
        .expect(401)
});