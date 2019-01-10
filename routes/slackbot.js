require('dotenv').config
var express = require('express');
var router = express.Router();

router.post('/', (req, res)=>{
  let payload = req.body;
  res.sendStatus(200);
})

module.exports = router;
