const router = require('express').Router();

router.post('/login', (req, res) => {
   const username = req.body.username
   const password = req.body.password

   if (username == undefined || password == undefined){
       return res.sendStatus(401)
   }
   else {
       //sample success response for testing
       return res.sendStatus(200)
   }
})

module.exports = router;