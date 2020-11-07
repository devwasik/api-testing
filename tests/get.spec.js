const supertest = require('supertest')
const app = require('../app')


test("GET /hello", async () => {
    await supertest(app)
        .get("/getRoute/hello")
        .expect(200)
        .then((response) => {
            expect(response.text).toEqual('hello!')
        })
})

test("GET /customHello", async () => {
    await supertest(app)
        .get("/getRoute/customHello/Nick")
        .expect(200)
        .then((response) => {
            expect(response.text).toEqual('Hello Nick!')
        })
})