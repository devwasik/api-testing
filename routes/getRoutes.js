const router = require('express').Router();


router.get('/hello', (req, res) => {
    res.send('hello!')
})

router.get('/customHello/:name', (req, res) => {
    const name = req.params.name;
    return res.send(`Hello ${name}!`)
})

module.exports = router;